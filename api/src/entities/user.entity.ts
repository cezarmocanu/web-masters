import { Exclude } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'users',
  schema: 'webmasters',
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 255 })
  email: string;

  @Column({ name: 'created_date', nullable: false })
  createdDate: string;

  @Exclude()
  @Column({ name: 'password_hash', length: 255, nullable: false })
  passwordHash: string;

  @Column({ name: 'is_active', nullable: false })
  isActive: boolean;
}
