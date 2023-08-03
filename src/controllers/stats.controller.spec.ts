import { Test, TestingModule } from '@nestjs/testing';

import { StatsUseCases } from './../use-cases/stats/stats.use-case';
import { StatsController } from './stats.controller';

describe('StatsController', () => {
    let controller: StatsController;
    let statsUseCases = {
        getStats: jest.fn((dto) => {
            return {
                total_shipped: '54',
                total_not_shipped: '15',
                total_budget: '39',
            };
        }),
    };
    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [StatsController],
            providers: [StatsUseCases],
        })
            .overrideProvider(StatsUseCases)
            .useValue(statsUseCases)
            .compile();

        controller = module.get<StatsController>(StatsController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    it('create a shipment', async () => {
        expect(await controller.getAll()).toEqual({
            success: expect.any(Boolean),
            data: expect.objectContaining({
                total_shipped: expect.any(String),
                total_not_shipped: expect.any(String),
                total_budget: expect.any(String),
            }),
        });

        expect(await statsUseCases.getStats).toHaveBeenCalled();
    });
});
