import { Module } from '@nestjs/common';
import { PrismaUserRepository } from 'src/infra/database/prisma-repositories/user';
import { Crypto } from 'src/infra/security/crypto';
import { UserLoginController } from '../controllers/auth/login';
import { UserLoginService } from 'src/service/auth/login';
import { RefreshUserSessionController } from '../controllers/auth/refresh-session';
import { RefreshUserSessionService } from 'src/service/auth/refresh-session';

@Module({
  controllers: [UserLoginController, RefreshUserSessionController], // controllers
  providers: [Crypto, PrismaUserRepository, UserLoginService, RefreshUserSessionService] // services
})
export class AuthModule {}
