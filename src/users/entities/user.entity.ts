
import { Order } from "src/orders/entities/order.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Address } from '../../addresses/entities/address.entity';

@Entity()
export class User{
    @PrimaryGeneratedColumn()//Primary key
    id: number;
    @Column()
    name: string;
    @Column()
    surname: string;
    @Column()
    dni: string;
    @Column()
    email: string;
    @Column()
    password: string;
    @Column()
    phone: string;

      // Entities relatiions
    
    @OneToMany(() => Order,
    (order: Order) => order.user,
    {onUpdate: 'CASCADE', onDelete: 'CASCADE'},
    )
    @JoinColumn({ name: 'order_id'})
    order: Order[];

    @OneToMany(() => Address,
    (address: Address) => address.user,
    {onUpdate: 'CASCADE', onDelete: 'CASCADE'},
    )
    @JoinColumn({ name: 'address_id'})
    address: Address[];
    
    
}