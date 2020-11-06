import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('wishlist')
export class Wishlist {
  @PrimaryGeneratedColumn()
  idWish: number;

  @Column()
  idProduct: number;

  @Column()
  idCliente: number;

  @CreateDateColumn({type: 'timestamp'})
  date: Date;

}