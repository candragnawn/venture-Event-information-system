import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { TicketStatus } from '@prisma/client';

export class CreateTicketDto {
  @IsString()
  @IsNotEmpty()
  qr_code!: string;

  @IsNumber()
  @IsNotEmpty()
  event_id!: number;

  @IsNumber()
  @IsNotEmpty()
  user_id!: number;

  @IsOptional()
  @IsNumber()
  price!: number;
}
