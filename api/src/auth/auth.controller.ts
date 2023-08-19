import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/entities/user.entity';
import { IsEmail, IsNotEmpty } from 'class-validator';

class AuthDTO {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}

@UseInterceptors(ClassSerializerInterceptor)
@Controller('/api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  async singUp(@Body() dto: AuthDTO): Promise<User | string> {
    try {
      return await this.authService.signUp(dto.email, dto.password);
    } catch (e) {
      return e.message;
    }
  }

  @Post('sign-in')
  async singIn(@Body() dto: AuthDTO): Promise<User | string> {
    try {
      return await this.authService.signIn(dto.email, dto.password);
    } catch (e) {
      return e.message;
    }
  }
}
