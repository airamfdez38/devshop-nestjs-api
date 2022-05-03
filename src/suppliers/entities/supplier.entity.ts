import { Product } from "src/products/entities/product.entity";
import { Column, Entity, JoinColumn, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Supplier{
    @PrimaryGeneratedColumn()//Primary key
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

    //Entities relations
    @ManyToMany(
        type => Product,
        product => product.supplier,
    {onUpdate: 'CASCADE', onDelete: 'CASCADE'},
    )
    @JoinColumn({ name: 'order_id'})
    product: Product[];
    
}