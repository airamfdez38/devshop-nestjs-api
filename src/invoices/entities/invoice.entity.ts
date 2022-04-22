import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Invoice{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    date: string;
    @Column()
    amount: number;
    @Column()
    payment_method: string;
   
    
}