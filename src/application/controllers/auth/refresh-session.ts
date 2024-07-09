import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { routes } from 'src/infra/routes';
import { SkipAuth } from 'src/infra/security/skip-auth';
import { validateData } from 'src/infra/validations/zodParser';
import { RefreshSessionRequestDTO, RefreshUserSessionService } from 'src/service/auth/refresh-session';
import { z } from 'zod';

const refreshSessionSchema = z.object({
  refreshToken: z.string()
});

@ApiTags('Authentication')
@Controller()
export class RefreshUserSessionController {
  constructor(private readonly service: RefreshUserSessionService) {}
  @SkipAuth()
  @Post(routes.auth.refresh)
  async create(@Body() body: RefreshSessionRequestDTO) {
    validateData(body, refreshSessionSchema);
    const response = await this.service.execute(body);

    return response;
  }
}
