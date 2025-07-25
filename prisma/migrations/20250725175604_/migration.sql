/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `game` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "game" ADD COLUMN     "slug" TEXT NOT NULL DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX "game_slug_key" ON "game"("slug");
