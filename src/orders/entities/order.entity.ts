import { Product } from "src/products/entities/product.entity";
import { Supplier } from "src/suppliers/entities/supplier.entity";
import { Column, Entity, JoinColumn, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Invoice } from '../../invoices/entities/invoice.entity';

@Entity()
export class Order{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    date: string;
    @Column()
    amount: number;
    @Column()
    total: number;
    
    @ManyToMany(() => Product,
    (product: Product) => product.id,
    {onUpdate: 'CASCADE', onDelete: 'CASCADE'},
    )
    @JoinColumn({ name: 'product_id'})
    product: Product;

    @ManyToMany(() => Supplier,
    (supplier: Supplier) => supplier.id,
    {onUpdate: 'CASCADE', onDelete: 'CASCADE'},
    )
    @JoinColumn({ name: 'supplier_id'})
    supplier: Supplier;

    @OneToOne(() => Invoice,
    (invoice: Invoice) => invoice.id,
    {onUpdate: 'CASCADE', onDelete: 'CASCADE'},
    )
    @JoinColumn({ name: 'invoice_id'})
    invoice: Invoice;
   
}