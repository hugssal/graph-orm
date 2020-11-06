import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  idPproduct: number;

  @Column()
  name: string;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @CreateDateColumn({type: 'timestamp'})
  date: Date;

  @Column({default: false})
  offer: boolean;

  @Column()
  offerPorcentaje: number;

  @Column({default: true})
  active: boolean;

}