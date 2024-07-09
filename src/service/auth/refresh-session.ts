import { ApiProperty } from '@nestjs/swagger';

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
