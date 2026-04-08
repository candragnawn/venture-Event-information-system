import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma, User } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service';
import { Role  } from '@prisma/client'
import { Review } from 'src/reviews/entities/review.entity';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email, name, role, phone, password } = createUserDto;
    return this.prisma.user.create({
      data: {
        email,
        name,
        phone,
        password,
        role
      },
    });
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
