import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';
import { Container, Shipment } from '../entities';

export class CreateResponseDto {
    @ApiProperty()
    @IsBoolean()
    success: boolean;

    @ApiProperty()
    data: Container[] | Container | Shipment | null;

    @ApiProperty()
    error: string;
}
