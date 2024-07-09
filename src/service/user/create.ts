import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { PrismaUserRepository } from 'src/infra/database/prisma-repositories/user';
import { Crypto } from 'src/infra/security/crypto';

export class CreateUserRequestDTO {
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  name: string;
}

@Injectable()
export class CreateUserService {
  constructor(
    private readonly crypto: Crypto,
    private readonly repository: PrismaUserRepository
  ) {}

  async execute(dto: CreateUserRequestDTO) {
    const hashedPassword = await this.crypto.encrypt(dto.password);

    await this.repository.createUser({
      email: dto.email,
      password: hashedPassword,
      name: dto.name
    });
  }
}
