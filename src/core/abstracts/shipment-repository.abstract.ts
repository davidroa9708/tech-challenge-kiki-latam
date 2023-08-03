import { IGenericRepository } from './generic-repository.abstract';

export abstract class IShipmentRepository<T> extends IGenericRepository<T> {
    abstract getStats();
}
