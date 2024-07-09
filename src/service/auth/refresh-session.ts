import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ApiProperty } from '@nestjs/swagger';
import { PrismaUserRepository } from 'src/infra/database/prisma-repositories/user';

export class RefreshSessionRequestDTO {
  @ApiProperty({ type: 'string' })
  refreshToken: string;
}

export class RefreshSessionResponseDTO {
  @ApiProperty({ type: 'string' })
  token: string;
  @ApiProperty({ type: 'string' })
  refreshToken: string;
}

@Injectable()
export class RefreshUserSessionService {
  constructor(
    private readonly repository: PrismaUserRepository,
    private readonly jwt: JwtService
  ) {}

  async execute(dto: RefreshSessionRequestDTO) {
    const user = await this.repository.getUserByRefreshToken(dto.refreshToken);

    const jwt = this.jwt.sign({
      id: user.id,
      email: user.email
    });

    return {
      token: jwt,
      refreshToken: dto.refreshToken
    };
  }
}
