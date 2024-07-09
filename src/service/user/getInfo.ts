import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { PrismaUserRepository } from 'src/infra/database/prisma-repositories/user';

export class GetUserInfoResponseDTO {
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  id: number;
}

@Injectable()
export class GetUserInfoService {
  constructor(private readonly repository: PrismaUserRepository) {}

  async execute(email: string) {
    const user = await this.repository.getUserByEmail(email);

    return {
      email: user.email,
      name: user.name,
      id: user.id
    };
  }
}
