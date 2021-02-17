import { User } from "src/auth/user.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    image: string;

    @Column({ default: 1})
    quantity: number

    @Column()
    category: string;

    @Column()
    fat: number;

    @Column()
    carbohydrates: number;

    @Column()
    protein: number;

    @Column()
    weight: number;

    @Column()
    price: string;

    @Column()
    expirationDate: Date;

    @ManyToOne(type => User, user => user.tasks, { eager: false })
    user: User;

    @Column()
    userId: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}


