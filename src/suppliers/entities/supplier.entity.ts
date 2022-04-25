import { Order } from "src/orders/entities/order.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Supplier{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    cif: string;
    @Column()
    address: string;
    @Column()
    email: string;
    @Column()
    phone: string;
    @OneToMany(() => Order,
    (order: Order) => order.supplier,
    {onUpdate: 'CASCADE', onDelete: 'CASCADE'},
    )
    @JoinColumn({ name: 'order_id'})
    order: Order[];
    
}