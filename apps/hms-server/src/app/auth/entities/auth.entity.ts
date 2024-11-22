import {
    Column,
    Entity,
    PrimaryColumn,
  } from 'typeorm';

  
  @Entity()
  export class Auth {
    @PrimaryColumn()
    email: string;
  
    @Column()
    password: string;
  }