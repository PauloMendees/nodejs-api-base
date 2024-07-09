import { Controller, Get, Request } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { routes } from 'src/infra/routes';
import { GetUserInfoService } from 'src/service/user/getInfo';

@ApiTags('User')
@Controller()
export class GetUserInfoController {
  constructor(private readonly service: GetUserInfoService) {}
  @ApiBearerAuth('JWT')
  @Get(routes.users)
  async create(@Request() req) {
    const info = await this.service.execute(req.user.email);

    return info;
  }
}
