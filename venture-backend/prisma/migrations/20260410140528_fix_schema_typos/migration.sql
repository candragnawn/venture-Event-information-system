/*
  Warnings:

  - You are about to drop the column `update_at` on the `User` table. All the data in the column will be lost.
  - Changed the type of `status` on the `Orders` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `updated_at` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('VALID', 'USED', 'EXPIRED');

-- AlterTable
ALTER TABLE "Orders" DROP COLUMN "status",
ADD COLUMN     "status" "OrderStatus" NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "update_at",
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- DropEnum
DROP TYPE "ordertStatus";
