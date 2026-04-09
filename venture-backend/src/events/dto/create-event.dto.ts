import { Category } from '@prisma/client';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsDataURI,
  IsEnum,
  Min,
  IsDateString,
} from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty()
  @IsString()
  title!: string;
  @IsNotEmpty()
  description!: string;
  @IsNotEmpty()
  @IsDataURI()
  image_url!: string;

  @IsEnum(Category)
  @IsNotEmpty()
  category!: Category;
  @IsNotEmpty()
  location!: string;
  @IsDateString()
  @IsNotEmpty()
  event_date!: Date;
  @IsNotEmpty()
  event_time!: string;

  @IsNumber()
  @IsNotEmpty()
  price!: number;
  @IsNotEmpty()
  @Min(1)
  quota!: number;
  @IsNotEmpty()
  organizer_id!: number;
}
