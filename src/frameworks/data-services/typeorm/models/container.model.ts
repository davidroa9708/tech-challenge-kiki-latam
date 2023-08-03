import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToOne,
} from 'typeorm';
import { Shipment } from './shipment.model';

@Entity()
export class Container {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    shipment_id: number;

    @Column({ default: false })
    ship: boolean;

    @Column()
    name: string;

    @Column()
    transport_cost: number;

    @Column()
    value: number;
}
