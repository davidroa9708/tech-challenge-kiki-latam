import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsString, ValidateNested } from 'class-validator';

export class ContainersDto {
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsNumber()
    transport_cost: number;

    @ApiProperty()
    @IsNumber()
    value: number;
}

export class SelectContainersDto {
    @ApiProperty({ default: 13000 })
    @IsNumber()
    budget: number;

    @ApiProperty({
        type: [ContainersDto],
        default: [
            {
                name: 'contenedor1',
                transport_cost: 5000,
                value: 5000,
            },
            {
                name: 'contenedor2',
                transport_cost: 6000,
                value: 10000,
            },
            {
                name: 'contenedor3',
                transport_cost: 7000,
                value: 8000,
            },
        ],
    })
    @ValidateNested({ each: true })
    @IsArray()
    @Type(() => ContainersDto)
    containers: ContainersDto[];
}
