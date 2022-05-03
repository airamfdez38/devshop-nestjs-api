
import { Product } from "src/products/entities/product.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinTable } from 'typeorm';
import { Invoice } from '../../invoices/entities/invoice.entity';

@Entity()
export class Order{ //sql table === 'order'
    @PrimaryGeneratedColumn()//Primary key
    id: number; 
    @Column()
    date: string;
    @Column()
    amount: number;
    @Column()
    total: number;
    
    // Entities relatiions
    @JoinTable()
    @OneToMany(()=> Product,
        product => product.order,
    {onUpdate: 'CASCADE', onDelete: 'CASCADE'},
    )
    @JoinColumn({ name: 'product_id'})
    product: Product[];
    
    @OneToOne(() => Invoice,
    (invoice: Invoice) => invoice.order,
    {onUpdate: 'CASCADE', onDelete: 'CASCADE'},
    )
    @JoinColumn({ name: 'invoice_id'})
    invoice: Invoice;
    /*
    @ManyToOne(() => User,
    (user: User) => user.order,
    {onUpdate: 'CASCADE', onDelete: 'CASCADE'},
    )
    @JoinColumn({ name: 'user_id'})
    user: User;
   */

    @ManyToOne(
        type => User, user => user.order,
        {onUpdate: 'CASCADE', onDelete: 'CASCADE'},
    )
    user: string;
}
