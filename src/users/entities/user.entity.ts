
import { Order } from "src/orders/entities/order.entity";
import { Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Address } from '../../addresses/entities/address.entity';

@Entity('users')
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
    @Column({default: 0})
    recommendations: number;
    @Column({ default: true })
    isActive: boolean;

      // Entities relatiions
    /*
    @OneToMany(() => Order,
    (order: Order) => order.user,
    {onUpdate: 'CASCADE', onDelete: 'CASCADE'},
    )
    @JoinColumn({ name: 'order_id'})
    order: Order[];*/
    @OneToMany(
      type=> Order,
      order => order.user,
      {onUpdate: 'CASCADE', onDelete: 'CASCADE'},
    )
    order: Order[];

    @OneToMany(
      type => Address,
      address => address.user,
      {onUpdate: 'CASCADE', onDelete: 'CASCADE'},
    )
    address: Address[];
    
    
}