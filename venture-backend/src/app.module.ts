import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { EventModule } from './events/event.module';
import { UserModule } from './user/user.module';
import { TicketsModule } from './tickets/tickets.module';
import { OrdersModule } from './orders/orders.module';
import { PaymentsModule } from './payments/payments.module';
import { ReviewsModule } from './reviews/reviews.module';
import { FavouriteModule } from './favourite/favourite.module';

@Module({
  imports: [PrismaModule, EventModule, UserModule, TicketsModule, OrdersModule, PaymentsModule, ReviewsModule, FavouriteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
