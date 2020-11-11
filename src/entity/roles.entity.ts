import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('roles')
export class Roles {
  @PrimaryGeneratedColumn()
  idRol: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn({type: 'timestamp'})
  date: Date;

  @Column({default: true})
  active: boolean

}