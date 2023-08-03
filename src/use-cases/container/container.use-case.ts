import { Injectable } from '@nestjs/common';

import { Container, Shipment } from '../../core/entities';
import { SelectContainersDto } from './../../core/dtos';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class ContainerUseCases {
    constructor(private dataServices: IDataServices) {}

    async selectContainers(
        containerDto: SelectContainersDto,
    ): Promise<Container[]> {
        const containers = [];
        let totalTransportCost = 0;
        let totalValueShipped = 0;
        let totalValueNotShipped = 0;

        const shipment = await this.dataServices.shipment.createItem({
            budget: containerDto.budget,
            total_containers: containerDto.containers.length,
            total_containers_shipped: 0,
            total_transport_cost: 0,
            total_value_shipped: 0,
            total_value_not_shipped: 0,
        });
        containerDto.containers.map((container) => {
            container['ratio'] =
                container['value'] / container['transport_cost'];
            return container;
        });

        containerDto.containers.sort((a, b) => b['ratio'] - a['ratio']);

        containerDto.containers.map(async (item) => {
            totalTransportCost += item['transport_cost'];
            if (totalTransportCost <= containerDto.budget) {
                item['ship'] = true;
                totalValueShipped += item['value'];
                containers.push(item);
            } else {
                totalTransportCost -= item['transport_cost'];
                totalValueNotShipped += item['value'];
            }
            await this.dataServices.containers.createItem({
                shipment_id: shipment.id,
                name: item['name'],
                ship: item['ship'],
                value: item['value'],
                transport_cost: item['transport_cost'],
            });
        });
        await this.dataServices.shipment.updateItem(shipment.id.toString(), {
            total_containers_shipped: containers.length,
            total_transport_cost: totalTransportCost,
            total_value_shipped: totalValueShipped,
            total_value_not_shipped: totalValueNotShipped,
        } as Shipment);
        return containers.map((item) => delete item['ratio'] && item);
    }
}
