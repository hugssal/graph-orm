import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('sales')
export class Sale {
  @PrimaryGeneratedColumn()
  idSale: number;

  @Column()
  idProduct: number;

  @Column()
  quantity: number;

  @Column()
  idClient: string;

  @Column()
  idSeller: string;

  @CreateDateColumn({type: 'timestamp'})
  date: Date;

}