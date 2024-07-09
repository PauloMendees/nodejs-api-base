import { User } from 'src/domain/user/entities';
import { UserRepository } from 'src/domain/user/repository';
import { prismaClient } from '../prisma';
import { CreateUserDTO } from 'src/domain/user/entities/dtos/create';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  getUserByEmail(email: string): Promise<User | null> {
    return prismaClient.uSER.findUnique({
      where: {
        email
      }
    });
  }
  createUser(user: CreateUserDTO): Promise<User> {
    return prismaClient.uSER.create({
      data: {
        email: user.email,
        password: user.password,
        name: user.name
      }
    });
  }
}
