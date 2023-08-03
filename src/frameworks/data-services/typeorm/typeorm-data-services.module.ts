import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IDataServices } from './../../../core/abstracts';
import { Container } from './models/container.model';
import { Shipment } from './models/shipment.model';
import { TypeormDataService } from './typeorm-data-services.service';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.DB_HOST || 'localhost',
            port: parseInt(process.env.DB_PORT) || 5432,
            username: process.env.DB_USER || 'kiki',
            password: process.env.DB_PASSWORD || 'kikipwd',
            database: process.env.DB_NAME || 'kikidb',
            entities: [Container, Shipment],
            synchronize: true,
        }),
        TypeOrmModule.forFeature([Container, Shipment]),
    ],
    providers: [
        {
            provide: IDataServices,
            useClass: TypeormDataService,
        },
    ],
    exports: [IDataServices],
})
export class TypeormDataServiceModule {}
