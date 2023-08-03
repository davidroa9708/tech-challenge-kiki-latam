import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services.module';
import { ContainerUseCases } from './container.use-case';

@Module({
    imports: [DataServicesModule],
    providers: [ContainerUseCases],
    exports: [ContainerUseCases],
})
export class ContainerUseCasesModule {}
