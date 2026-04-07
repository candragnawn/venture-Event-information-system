import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma, User } from '../../generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';
import { Role } from '../../generated/prisma';
import { Review } from 'src/reviews/entities/review.entity';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const {
      id,
      email,
      name,
      role,
      phone,
      create_at,
      update_at,
      Event,
      ticket,
      order,
      payment,
      reviews,
      favourite,
    } = createUserDto;
    return this.prisma.user.create({
      data: {
        id,
        email,
        name,
        role,
        phone,
        create_at,
        update_at,
        Event: Event
          ? {
              connect: Event.map((id) => ({ id: Number(id) })),
            }
          : undefined,
        ticket: ticket
          ? {
              connect: ticket.map((id) => ({ ticket_id: String(id) })),
            }
          : undefined,
        order: order
          ? {
              connect: order.map((id) => ({ id: Number(id) })),
            }
          : undefined,

        Reviews: reviews
          ? {
              connect: reviews.map((id) => ({ id: id })),
            }
          : undefined,
        payment: payment
          ? {
              connect: payment.map((id) => ({ id: Number(id) })),
            }
          : undefined,
        favourite: favourite
          ? {
              connect: favourite.map((id) => ({ id: Number(id) })),
            }
          : undefined,
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
