import { Container, Shipment } from '../entities';
import { IGenericRepository } from './generic-repository.abstract';
import { IShipmentRepository } from './shipment-repository.abstract';

export abstract class IDataServices {
    abstract containers: IGenericRepository<Container>;

    abstract shipment: IShipmentRepository<Shipment>;
}
