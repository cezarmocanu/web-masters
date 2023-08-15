import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/entities/user.entity';

@Controller('/api/users')
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

  @Get()
  async usersGet(): Promise<User[]> {
    try {
      // return await this.userService.findAll();
      return [];
    } catch (e) {
      return e.message;
    }
  }
}
