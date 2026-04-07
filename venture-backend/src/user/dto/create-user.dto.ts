import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsEnum,
  IsEmail,
  IsArray,
} from 'class-validator';
import { Role } from 'generated/prisma';

export class CreateUserDto {
  @IsNotEmpty()
  @IsNumber()
  id!: number;
  @IsString()
  @IsEmail()
  email!: string;
  name!: string;
  phone!: string;
  @IsEnum(Role)
  role!: Role;
  create_at!: string;
  update_at!: string;
  @IsArray()
  @IsString({ each: true })
  Event!: String[];
  ticket!: String[];
  order!: string[];
  payment!: string[];
  reviews!: string[];
  favourite!: string[];
}
