import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Event } from '@prisma/client'; // <-- fix import

@Injectable()
export class EventService {
  constructor(private prisma: PrismaService) {}

  async create(createEventDto: CreateEventDto): Promise<Event> {
    const {
      organizer_id,
      title,
      description,
      category,
      location,
      Event_date,
      Event_time,
      price,
      quota,
      image_url,
    } = createEventDto;

    return this.prisma.event.create({
      data: {
        title,
        description,
        category,
        location,
        Event_date: new Date(Event_date),
        Event_time: Event_time,
        price: new Prisma.Decimal(price),
        quota,
        image_url,
        organizer: {
          connect: { id: organizer_id },
        },
      },
    });
  }

  findAll() {
    return this.prisma.event.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} event`;
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    return `This action updates a #${id} event`;
  }

  remove(id: number) {
    return `This action removes a #${id} event`;
  }
}
