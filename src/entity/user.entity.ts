import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity } from 'typeorm';

@Entity('users')
export class User extends BaseEntity{
  @PrimaryGeneratedColumn()
  idUser: number;

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