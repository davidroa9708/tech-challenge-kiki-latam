import { Injectable } from '@nestjs/common';
import { Shipment } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class StatsUseCases {
    constructor(private dataServices: IDataServices) {}

    async getStats(): Promise<Shipment> {
        let stats = await this.dataServices.shipment.getStats();
        stats.total_shipped = stats.total_shipped / parseInt(process.env.EXCHANGE_RATE_COP_USA);
        stats.total_not_shipped = stats.total_not_shipped / parseInt(process.env.EXCHANGE_RATE_COP_USA)
        return stats;
    }
}
