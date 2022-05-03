import { Order } from "src/orders/entities/order.entity";
import { Column, Entity, JoinColumn, JoinTable, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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
    @JoinTable()
    @OneToOne(
        type => Order,
        order => order.invoice,
    {onUpdate: 'CASCADE', onDelete: 'CASCADE'},
    )
    order: Order;
   
    
}