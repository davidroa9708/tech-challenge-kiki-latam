import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { Container, IDataServices } from '../../../core';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shipment } from './models/shipment.model';
import { TypeormGenericRepository } from './typeorm-generic-repository.repository';
import { ShipmentRepository } from './repositories/shipment.repository';

@Injectable()
export class TypeormDataService
    implements IDataServices, OnApplicationBootstrap
{
    containers: TypeormGenericRepository<Container>;
    shipment: ShipmentRepository<Shipment>;

    constructor(
        @InjectRepository(Container)
        private ContainersRepo: Repository<Container>,
        @InjectRepository(Shipment)
        private ShipmentsRepo: Repository<Shipment>,
    ) {}

    onApplicationBootstrap() {
        this.containers = new TypeormGenericRepository(this.ContainersRepo);
        this.shipment = new ShipmentRepository(this.ShipmentsRepo);
    }
}
