import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services.module';
import { StatsUseCases } from './stats.use-case';

@Module({
    imports: [DataServicesModule],
    providers: [StatsUseCases],
    exports: [StatsUseCases],
})
export class StatsUseCasesModule {}
