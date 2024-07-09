import { Module } from '@nestjs/common';
import { PrismaUserRepository } from 'src/infra/database/prisma-repositories/user';
import { Crypto } from 'src/infra/security/crypto';
import { CreateUserService } from 'src/service/user/create';
import { CreateUserController } from '../controllers/user/create';
import { GetUserInfoController } from '../controllers/user/getInfo';
import { GetUserInfoService } from 'src/service/user/getInfo';

@Module({
  controllers: [CreateUserController, GetUserInfoController], // controllers
  providers: [Crypto, PrismaUserRepository, CreateUserService, GetUserInfoService] // services
})
export class UserModule {}
