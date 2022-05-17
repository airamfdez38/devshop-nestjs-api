
import { Product } from "src/products/entities/product.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinTable } from 'typeorm';
import { Invoice } from '../../invoices/entities/invoice.entity';

@Entity('orders')
export class Order{ //sql table === 'order'
    @PrimaryGeneratedColumn('uuid')//Primary key
    id: string; 
    @Column()
    date: string;
    @Column()
    amount: number;
    @Column()
    total: number;
    @Column({default: 0})
    recommendations: number;
    
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
   
    @ManyToOne(
        type => User, user => user.order,
        {onUpdate: 'CASCADE', onDelete: 'CASCADE'},
    )
    user: string;
}
