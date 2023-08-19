import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private configService: ConfigService,
  ) {}

  async signIn(email: string, password: string) {
    const user = await this.userService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException();
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);

    if (!isMatch) {
      throw new UnauthorizedException();
    }

    return jwt.sign(
      { subject: user.email, id: user.id },
      this.configService.get<string>('JWT_KEY'),
    );
  }

  async signUp(email: string, password: string) {
    const passwordHash = await bcrypt.hash(password, 10);
    return await this.userService.createUser(email, passwordHash);
  }
}
