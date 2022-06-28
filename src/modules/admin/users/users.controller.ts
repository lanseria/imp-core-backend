import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller({
  path: 'users',
  version: '1',
})
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/find_user_by_username/:username')
  findUserByUsername(@Param('username') username: string) {
    return this.usersService.findUserByUsername(username);
  }
}
