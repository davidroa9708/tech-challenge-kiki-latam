import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

import { ContainerController } from './controllers/container.controller';
import { DataServicesModule } from './services/data-services.module';
import { ContainerUseCasesModule } from './use-cases/container';
import { AppController } from './controllers/app.controller';
import config from './config';
import * as Joi from 'joi';
import { StatsUseCasesModule } from './use-cases/stats/stats-use-cases.module';
import { StatsController } from './controllers/stats.controller';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
            load: [config],
            isGlobal: true,
            validationSchema: Joi.object({
                PORT: Joi.number().required(),
                DB_PORT: Joi.number().required(),
                DB_USER: Joi.string().required(),
                DB_PASSWORD: Joi.string().required(),
                DB_NAME: Joi.string().required(),
                DB_HOST: Joi.string().required(),
                EXCHANGE_RATE_COP_USA: Joi.number().required(),
            }),
        }),
        StatsUseCasesModule,
        DataServicesModule,
        ContainerUseCasesModule,
    ],
    controllers: [AppController, StatsController, ContainerController],
    providers: [],
})
export class AppModule {}
