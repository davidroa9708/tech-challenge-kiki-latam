import { Controller, Get } from '@nestjs/common';

import { StatsUseCases } from './../use-cases/stats/stats.use-case';
import { CreateResponseDto } from './../core/dtos';

@Controller('api/v1/stats')
export class StatsController {
    constructor(private statsUseCases: StatsUseCases) {}

    @Get()
    async getAll(): Promise<CreateResponseDto> {
        const createContainerResponse = new CreateResponseDto();
        try {
            const data = await this.statsUseCases.getStats();

            createContainerResponse.success = true;
            createContainerResponse.data = data;
        } catch (error) {
            createContainerResponse.success = false;
            createContainerResponse.error = error.message;
        }

        return createContainerResponse;
    }
}
