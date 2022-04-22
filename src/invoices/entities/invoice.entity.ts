import { Order } from "src/orders/entities/order.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Invoice{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    date: string;
    @Column()
    amount: number;
    @Column()
    payment_method: string;

    @OneToOne(() => Order,
    (order: Order) => order.id,
    {onUpdate: 'CASCADE', onDelete: 'CASCADE'},
    )
    @JoinColumn({ name: 'order_id'})
    order: Order;
   
    
}