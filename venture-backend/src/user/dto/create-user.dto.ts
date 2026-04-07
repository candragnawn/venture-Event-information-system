import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsEnum,
  IsOptional,
  IsDataURI,
  isNotEmpty,
  IsEmail,
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
  @IsString()
  Event!: string;
  ticket!: string[];
  order!: string[];
  payment!: string[];
  reviews!: string[];
  favourite!: string[];
}
