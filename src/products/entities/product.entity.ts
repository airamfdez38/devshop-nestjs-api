import { Order } from "src/orders/entities/order.entity";
import { Supplier } from '../../suppliers/entities/supplier.entity';
import { ManyToMany } from 'typeorm';
import { 
    Column,
    Entity,
    JoinTable,
    ManyToOne,
    PrimaryGeneratedColumn,} from "typeorm";

@Entity() //  sql table === 'product'
export class Product{
    @PrimaryGeneratedColumn('uuid')//Primary key
    uuid: string;
    @Column()
    name: string;
    @Column()
    brand: string;
    @Column()
    stock: number;
    @Column()
    price: number;
    @Column()
    category: string;
    @Column()
    image: string
    
      // Entities relatiions
    @JoinTable()
    @ManyToMany(
      type => Order,
      order=> order.product,
      {onUpdate: 'CASCADE', onDelete: 'CASCADE'},
    )
    order: Order[];

    @ManyToOne(
      type => Supplier,
      supplier => supplier.product,
      {onUpdate: 'CASCADE', onDelete: 'CASCADE'},
    )
    supplier: Supplier
    
}