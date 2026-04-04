import { Category } from "generated/prisma";

export class CreateEventDto {
  title?: string;
  description?: string;
  category?: Category;
  location?: string;
  Event_date?: Date;
  Event_time?: string;
  price?: number;
  quota?: number;
  organizer_id?: number;
  image_url?: string;
}
