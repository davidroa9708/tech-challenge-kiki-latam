import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    OneToMany,
    JoinColumn,
} from 'typeorm';
import { Container } from './container.model';

@Entity()
export class Shipment {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    total_value_shipped: number;

    @Column()
    total_value_not_shipped: number;

    @Column()
    total_transport_cost: number;

    @Column()
    total_containers: number;

    @Column()
    total_containers_shipped: number;

    @Column()
    budget: number;

    @Column({ default: 'now()' })
    created_at?: Date;
}
