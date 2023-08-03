import { Controller, Post, Body } from '@nestjs/common';

import { CreateResponseDto, SelectContainersDto } from './../core/dtos';
import { ContainerUseCases } from './../use-cases/container';

@Controller('api/v1/containers')
export class ContainerController {
    constructor(private containerUseCases: ContainerUseCases) {}

    @Post()
    async containers(
        @Body() containerDto: SelectContainersDto,
    ): Promise<CreateResponseDto> {
        const createContainerResponse = new CreateResponseDto();
        try {
            const data = await this.containerUseCases.selectContainers(
                containerDto,
            );

            createContainerResponse.success = true;
            createContainerResponse.data = data;
        } catch (error) {
            createContainerResponse.success = false;
            createContainerResponse.error = error.message;
        }

        return createContainerResponse;
    }
}
