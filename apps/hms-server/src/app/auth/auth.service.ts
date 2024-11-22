import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    private readonly logger = new Logger(AuthService.name);

    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
) {}

async signIn(
    email: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    console.log(email, pass)
    const user = await this.usersService.findOneEmail(email);
    if (!user || user?.password !== pass) {
      throw new UnauthorizedException();
    }
    this.logger.log(user);
    const payload = { sub: user.id, username: user.name };
    console.log(user, payload);
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
