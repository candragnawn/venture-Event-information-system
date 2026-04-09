/*
  Warnings:

  - You are about to drop the column `event_id` on the `Favourite` table. All the data in the column will be lost.
  - You are about to drop the column `event_id` on the `Reviews` table. All the data in the column will be lost.
  - You are about to drop the column `event_id` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the `event` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `event_id` to the `Favourite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `event_id` to the `Reviews` table without a default value. This is not possible if the table is not empty.
  - Added the required column `event_id` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Favourite" DROP CONSTRAINT "Favourite_event_id_fkey";

-- DropForeignKey
ALTER TABLE "Reviews" DROP CONSTRAINT "Reviews_event_id_fkey";

-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_event_id_fkey";

-- DropForeignKey
ALTER TABLE "event" DROP CONSTRAINT "event_organizer_id_fkey";

-- AlterTable
ALTER TABLE "Favourite" DROP COLUMN "event_id",
ADD COLUMN     "event_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Reviews" DROP COLUMN "event_id",
ADD COLUMN     "event_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "event_id",
ADD COLUMN     "event_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "event";

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" "Category" NOT NULL,
    "location" TEXT NOT NULL,
    "Event_date" TIMESTAMP(3) NOT NULL,
    "Event_time" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "quota" INTEGER NOT NULL,
    "image_url" TEXT,
    "organizer_id" INTEGER NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_organizer_id_fkey" FOREIGN KEY ("organizer_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favourite" ADD CONSTRAINT "Favourite_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
