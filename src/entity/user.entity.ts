import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  rolId: number;

  @CreateDateColumn({type: 'timestamp'})
  date: Date;

  @Column({default: true})
  active: boolean;

}