import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'users',
  schema: 'webmasters',
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 250 })
  email: string;

  @Column({ name: 'created_date', nullable: false })
  createdDate: string;
}
