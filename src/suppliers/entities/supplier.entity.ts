import { Order } from "src/orders/entities/order.entity";
import { Column, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn } from "typeorm";


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
    @ManyToMany(() => Order,
    (supplier: Order) => supplier.id,
    {onUpdate: 'CASCADE', onDelete: 'CASCADE'},
    )
    @JoinColumn({ name: 'supplier_id'})
    supplier: Order;
    
}