import { Category } from 'generated/prisma';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsEnum,
  IsDataURI,
  IsDateString,
} from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty()
  @IsString()
  title!: string;
  @IsNotEmpty()
  description!: string;
  @IsNotEmpty()
  image_url!: string;

  @IsEnum(Category)
  @IsNotEmpty()
  category!: Category;
  @IsNotEmpty()
  location!: string;
  @IsDateString()
  @IsNotEmpty()
  Event_date!: Date;
  @IsNotEmpty()
  Event_time!: string;

  @IsNumber()
  @IsNotEmpty()
  price!: number;
  @IsNotEmpty()
  quota!: number;
  @IsNotEmpty()
  organizer_id!: number;
}
