import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Address{
    @PrimaryGeneratedColumn()
    id: number;
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
    @ManyToOne(() => User,
    (user: User) => user.id,
    {onUpdate: 'CASCADE', onDelete: 'CASCADE'},
    )
    @JoinColumn({ name: 'user_id'})
    user: User;
    
}