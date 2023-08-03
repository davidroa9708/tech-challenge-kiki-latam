import {} from '@nestjs/typeorm';
import { IGenericRepository } from '../../../core';
import { Repository } from 'typeorm';

export class TypeormGenericRepository<T> implements IGenericRepository<T> {
    private _repository: Repository<T>;

    constructor(repository: Repository<T>) {
        this._repository = repository;
    }

    getAll(): Promise<T[]> {
        return this._repository.find();
    }

    async createItem(item: T): Promise<T> {
        return await this._repository.save(item);
    }

    async updateItem(id: any, item: T): Promise<T> {
        let oldItem = await this._repository.findOneBy({ id } as any);
        return await this._repository.save({ ...oldItem, ...item });
    }
}
