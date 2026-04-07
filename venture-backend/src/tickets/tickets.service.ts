import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Ticket } from '../../generated/prisma';

@Injectable()
export class TicketsService {
  constructor(private prisma: PrismaService) {}
  async create(createTicketDto: CreateTicketDto): Promise<Ticket> {
    const { qr_code, price, Event_id, user_id } = createTicketDto;
    
    return this.prisma.ticket.create({
      data: {
        qr_code,
        price,
        Event_id,
        user_id,
      },
    });
  }

  findAll() {
    return `This action returns all tickets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ticket`;
  }

  update(id: number, updateTicketDto: UpdateTicketDto) {
    return `This action updates a #${id} ticket`;
  }

  remove(id: number) {
    return `This action removes a #${id} ticket`;
  }
}
