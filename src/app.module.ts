import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './infra/security/jwt-constants';
import { UserModule } from './application/modules/user.module';
import { AuthModule } from './application/modules/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './infra/security/auth';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' }
    }),
    UserModule,
    AuthModule
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    }
  ]
})
export class AppModule {}
