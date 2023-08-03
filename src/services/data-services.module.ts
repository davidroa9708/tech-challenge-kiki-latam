import { Module } from '@nestjs/common';
import { TypeormDataServiceModule } from '../frameworks/data-services/typeorm/typeorm-data-services.module';

@Module({
    imports: [TypeormDataServiceModule],
    exports: [TypeormDataServiceModule],
})
export class DataServicesModule {}
