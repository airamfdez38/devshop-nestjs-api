import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('addresses')
export class Address{
    @PrimaryGeneratedColumn('uuid') //Primary key
    id: string;
    @Column()
    via: string;
    @Column()
    name: string;
    @Column()
    number: string;
    @Column()
    zip_code: string;
    @Column()
    city: string;
    @Column()
    country: string;
    @Column({default: 0})
    recommendations: number;

    // Entities relations
    @ManyToOne(
        type => User,
        user => user.address,
        {onUpdate: 'CASCADE', onDelete: 'CASCADE'},
    )
    user: User;
    
}