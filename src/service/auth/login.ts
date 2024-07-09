import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ApiProperty } from '@nestjs/swagger';
import { PrismaUserRepository } from 'src/infra/database/prisma-repositories/user';
import { Crypto } from 'src/infra/security/crypto';

export class LoginRequestDTO {
  @ApiProperty({ type: 'string' })
  email: string;
  @ApiProperty({ type: 'string' })
  password: string;
}

export class LoginResponseDTO {
  @ApiProperty({ type: 'string' })
  token: string;
  @ApiProperty({ type: 'string' })
  refreshToken: string;
}

@Injectable()
export class UserLoginService {
  constructor(
    private readonly repository: PrismaUserRepository,
    private readonly crypto: Crypto,
    private readonly jwt: JwtService
  ) {}

  async execute(dto: LoginRequestDTO) {
    const user = await this.repository.getUserByEmail(dto.email);

    const isPasswordValid = await this.crypto.compare(dto.password, user.password);
    if (!isPasswordValid) throw new UnauthorizedException();

    const jwt = this.jwt.sign({
      id: user.id,
      email: user.email
    });

    return {
      token: jwt,
      refreshToken: user?.refreshToken?.id
    };
  }
}
