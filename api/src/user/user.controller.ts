import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async usersPost(@Body() dto: { email: string }): Promise<string> {
    try {
      await this.userService.createUser(dto.email);
      return `User ${dto.email} created`;
    } catch (e) {
      return e.message;
    }
  }
}
