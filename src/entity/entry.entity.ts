import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('entry')
export class Entry {
  @PrimaryGeneratedColumn()
  idEntry: number;

  @Column()
  idProduct: number;

  @Column()
  quantity: number;

  @CreateDateColumn({type: 'timestamp'})
  date: Date;

}