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

    // Entities relations

    @OneToOne(() => Order,
    (order: Order) => order.invoice,
    {onUpdate: 'CASCADE', onDelete: 'CASCADE'},
    )
    @JoinColumn({ name: 'order_id'})
    order: Order;
   
    
}