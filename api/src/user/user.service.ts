import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async createUser(email: string): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { email } });
    if (user) {
      throw new Error(`User ${user.email} already exists`);
    }

    const newUser = this.usersRepository.create({ email });
    await this.usersRepository.save(newUser);
    return newUser;
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }
}
