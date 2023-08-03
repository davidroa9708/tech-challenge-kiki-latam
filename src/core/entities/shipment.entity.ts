export class Shipment {
    id?: number;
    total_value_shipped: number;
    total_value_not_shipped: number;
    total_transport_cost: number;
    total_containers: number;
    total_containers_shipped: number;
    budget: number;
    created_at?: Date;
}
