import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { TicketStatus } from 'generated/prisma';
export class CreateTicketDto {
  @IsString()
  @IsNotEmpty()
  qr_code!: string;

  @IsNumber()
  @IsNotEmpty()
  Event_id!: number;

  @IsNumber()
  @IsNotEmpty()
  user_id!: number;

  @IsOptional()
  price!: number;
}
