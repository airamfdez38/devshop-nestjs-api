import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
    
}