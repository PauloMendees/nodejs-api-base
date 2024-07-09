import { User } from 'src/domain/user/entities';
import { UserRepository } from 'src/domain/user/repository';
import { prismaClient } from '../prisma';
import { CreateUserDTO } from 'src/domain/user/entities/dtos/create';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  async getUserByRefreshToken(refreshToken: string): Promise<User> {
    const dbRefreshToken = await prismaClient.rEFRESH_TOKEN.findUnique({
      where: {
        id: refreshToken
      },
      include: {
        user: true
      }
    });

    return dbRefreshToken.user;
  }

  getUserByEmail(email: string): Promise<User | null> {
    return prismaClient.uSER.findUnique({
      where: {
        email
      },
      include: {
        refreshToken: true
      }
    });
  }
  async createUser(user: CreateUserDTO): Promise<User> {
    const dbUser = await prismaClient.uSER.create({
      data: {
        email: user.email,
        password: user.password,
        name: user.name
      }
    });

    await prismaClient.rEFRESH_TOKEN.create({
      data: {
        userId: dbUser.id
      }
    });

    return dbUser;
  }
}
