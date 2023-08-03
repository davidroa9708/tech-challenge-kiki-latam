import {} from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeormGenericRepository } from '../typeorm-generic-repository.repository';
import { IShipmentRepository } from '../../../../core/abstracts/shipment-repository.abstract';

export class ShipmentRepository<T>
    extends TypeormGenericRepository<T>
    implements IShipmentRepository<T>
{
    private _shipment_repository: Repository<T>;

    constructor(repository: Repository<T>) {
        super(repository);
        this._shipment_repository = repository;
    }

    getStats() {
        return this._shipment_repository
            .createQueryBuilder('shipment')
            .select(
                'sum(total_value_shipped) as total_shipped, sum(total_value_not_shipped) as total_not_shipped, sum(budget) as total_budget',
            )
            .getRawOne();
    }
}
