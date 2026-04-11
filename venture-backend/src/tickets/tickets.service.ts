import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Ticket } from '@prisma/client'; // <-- fix import

@Injectable()
export class TicketsService {
  constructor(private prisma: PrismaService) {}

  async create(createTicketDto: CreateTicketDto): Promise<Ticket> {
    const { qr_code, price, event_id, user_id } = createTicketDto;

    return this.prisma.ticket.create({
      data: {
        qr_code,
        price,
        event: {
          connect: { id: event_id },
        },
        user: {
          connect: { id: user_id },
        },
      },
    });
  }

  async findAll() {
    return this.prisma.ticket.findMany({
      include: { event: true },
    });
  }

  async findOne(id: string) {
    return this.prisma.ticket.findUnique({
      where: { ticket_id: id },
    });
  }

  update(id: number, updateTicketDto: UpdateTicketDto) {
    return `This action updates a #${id} ticket`;
  }

  remove(id: number) {
    return `This action removes a #${id} ticket`;
  }
}
