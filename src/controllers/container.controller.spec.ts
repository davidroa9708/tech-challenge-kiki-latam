import { Test, TestingModule } from '@nestjs/testing';

import { ContainerController } from './container.controller';
import { ContainerUseCases } from './../use-cases/container';
import { CreateResponseDto } from './../core/dtos';

describe('ContainerController', () => {
    let controller: ContainerController;
    let containerUseCases = {
        selectContainers: jest.fn((dto) => {
            return [
                {
                    name: 'contenedor2',
                    transport_cost: 6,
                    value: 10,
                    ship: true,
                },
            ];
        }),
    };
    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ContainerController],
            providers: [ContainerUseCases],
        })
            .overrideProvider(ContainerUseCases)
            .useValue(containerUseCases)
            .compile();

        controller = module.get<ContainerController>(ContainerController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    it('send containers', async () => {
        const dto = {
            budget: 6,
            containers: [
                {
                    name: 'contenedor1',
                    transport_cost: 5,
                    value: 5,
                },
                {
                    name: 'contenedor2',
                    transport_cost: 6,
                    value: 10,
                },
                {
                    name: 'contenedor3',
                    transport_cost: 7,
                    value: 8,
                },
            ],
        };

        expect(await controller.containers(dto)).toEqual({
            success: expect.any(Boolean),
            data: expect.arrayContaining([
                expect.objectContaining({
                    name: expect.any(String),
                    ship: expect.any(Boolean),
                    transport_cost: expect.any(Number),
                    value: expect.any(Number),
                }),
            ]),
        });

        expect(await containerUseCases.selectContainers).toHaveBeenCalledWith(
            dto,
        );
    });
});
