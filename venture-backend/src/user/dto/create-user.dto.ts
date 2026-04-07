import {
  IsString,
  IsNotEmpty,
  IsEnum,
  IsEmail,
  IsStrongPassword,
  IsOptional,
} from 'class-validator';
import { Role } from 'generated/prisma';

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
