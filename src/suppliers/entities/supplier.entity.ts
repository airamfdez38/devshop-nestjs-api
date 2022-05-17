import { Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from '../../products/entities/product.entity';


@Entity()
export class Supplier{
    @PrimaryGeneratedColumn('uuid')//Primary key
    uuid: string;
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
    @JoinTable()
    @OneToMany(
        type => Product,
        product => product.supplier,
    {onUpdate: 'CASCADE', onDelete: 'CASCADE'},
    )
    product: Product[];
    
}