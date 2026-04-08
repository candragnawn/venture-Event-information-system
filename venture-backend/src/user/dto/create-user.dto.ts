import {
  IsString,
  IsNotEmpty,
  IsEnum,
  IsEmail,
  IsStrongPassword,
  IsOptional,
} from 'class-validator';
import { Role } from '@prisma/client';

export class CreateUserDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email!: string;
  @IsNotEmpty()
  @IsStrongPassword()
  password!: string;
  @IsNotEmpty()
  name!: string;
  @IsNotEmpty()
  phone!: string;
  @IsEnum(Role)
  @IsOptional()
  role!: Role;
}
