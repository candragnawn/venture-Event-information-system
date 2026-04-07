import { Category } from 'generated/prisma';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsEnum,
  IsDataURI,
} from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty()
  @IsString()
  title!: string;
  description!: string;
  image_url!: string;

  @IsEnum(Category)
  category!: Category;
  location!: string;
  @IsDataURI()
  Event_date!: Date;
  Event_time!: string;

  @IsNumber()
  price!: number;
  quota!: number;
  organizer_id!: number;
}
