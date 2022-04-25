import { Order } from "src/orders/entities/order.entity";
import { 
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,} from "typeorm";

@Entity() //  sql table === 'product'
export class Product{
    @PrimaryGeneratedColumn()
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
   
    @ManyToOne(() => Order,
    (order: Order) => order.product,
    {onUpdate: 'CASCADE', onDelete: 'CASCADE'},
    )
    @JoinColumn({ name: 'order_id'})
    order: Order[];
    
}