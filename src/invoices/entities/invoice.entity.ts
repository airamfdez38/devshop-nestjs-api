import { Order } from "src/orders/entities/order.entity";
import { Column, Entity, JoinTable, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('invoices')
export class Invoice{
    @PrimaryGeneratedColumn('uuid')
    uuid: string;
    @Column()
    date: string;
    @Column()
    amount: number;
    @Column()
    payment_method: string;
    @Column({default: 0})
    recommendations: number;

    // Entities relations
    @JoinTable()
    @OneToOne(
        type => Order,
        order => order.invoice,
    {onUpdate: 'CASCADE', onDelete: 'CASCADE'},
    )
    order: Order;
   
    
}
