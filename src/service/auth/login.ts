import { ApiProperty } from '@nestjs/swagger';

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
