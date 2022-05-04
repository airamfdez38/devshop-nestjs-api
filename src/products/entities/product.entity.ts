import { Order } from "src/orders/entities/order.entity";
import { Supplier } from '../../suppliers/entities/supplier.entity';
import { 
    Column,
    Entity,
    JoinTable,
    ManyToOne,
    PrimaryGeneratedColumn,} from "typeorm";

@Entity() //  sql table === 'product'
export class Product{
    @PrimaryGeneratedColumn()//Primary key
    id: number;
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
    @Column({default: 0})
    recommendations: number;
    
      // Entities relatiions
    @JoinTable()
    @ManyToOne(
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