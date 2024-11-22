import { ConflictException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const existingUser = await this.userRepository.findOne({ where: { email: createUserDto.email } });
    if (existingUser) {
      throw new ConflictException('Email already in use');   
    }
    const user = this.userRepository.create(createUserDto);
    this.logger.log(user)
    if(user){
      return await this.userRepository.save(user);
    }
  }

  async findAll() {
    return await this.userRepository.find({relations: ['appointment', 'appointment.patient']});
  }

  async findOne(id: number) {
    return await this.userRepository.findOne({where: { id},
      relations: ['appointment', 'appointment.patient']
    });
  }

  async findOneEmail(email: string) {
    return await this.userRepository.findOne({where: { email},
      relations: ['appointment', 'appointment.patient'],
      select: ['id', 'email', 'name', 'role', 'password'],
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findOne({where: { id} });
    if (!user) {
      this.logger.warn("No user with given id")
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    // Check if email is unique
    if (updateUserDto.email) {
        const existingUser = await this.userRepository.findOneBy({ email: updateUserDto.email });
        if (existingUser && existingUser.id !== id) {
            throw new ConflictException(`Email ${updateUserDto.email} is already in use`);
        }
    }

    Object.assign(user, updateUserDto);

    return await this.userRepository.save(user);
  }

  async remove(id: number):Promise<void> {
    const result = await this.userRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
  }
}
