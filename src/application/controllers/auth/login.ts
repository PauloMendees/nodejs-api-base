import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { routes } from 'src/infra/routes';
import { SkipAuth } from 'src/infra/security/skip-auth';
import { validateData } from 'src/infra/validations/zodParser';
import { LoginRequestDTO, UserLoginService } from 'src/service/auth/login';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string()
});

@ApiTags('Authentication')
@Controller()
export class UserLoginController {
  constructor(private readonly service: UserLoginService) {}
  @SkipAuth()
  @Post(routes.auth.login)
  async execute(@Body() body: LoginRequestDTO) {
    validateData(body, loginSchema);
    const response = await this.service.execute(body);

    return response;
  }
}
