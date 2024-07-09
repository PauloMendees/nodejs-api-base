import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { routes } from 'src/infra/routes';
import { SkipAuth } from 'src/infra/security/skip-auth';
import { validateData } from 'src/infra/validations/zodParser';
import { CreateUserRequestDTO, CreateUserService } from 'src/service/user/create';
import { z } from 'zod';

const createUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(3)
});

@ApiTags('User')
@Controller()
export class CreateUserController {
  constructor(private readonly service: CreateUserService) {}
  @SkipAuth()
  @Post(routes.users)
  async create(@Body() body: CreateUserRequestDTO) {
    validateData(body, createUserSchema);
    await this.service.execute(body);

    return;
  }
}
