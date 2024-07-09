import { Module } from '@nestjs/common';
import { PrismaUserRepository } from 'src/infra/database/prisma-repositories/user';
import { Crypto } from 'src/infra/security/crypto';
import { CreateUserService } from 'src/service/user/create';
import { CreateUserController } from '../controllers/user/create';

@Module({
  controllers: [CreateUserController], // controllers
  providers: [Crypto, PrismaUserRepository, CreateUserService] // services
})
export class UserModule {}
