/*
  Warnings:

  - You are about to drop the `TagsLojas` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "TagsLojas";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "_LojaToTags" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_LojaToTags_A_fkey" FOREIGN KEY ("A") REFERENCES "Loja" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_LojaToTags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tags" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_LojaToTags_AB_unique" ON "_LojaToTags"("A", "B");

-- CreateIndex
CREATE INDEX "_LojaToTags_B_index" ON "_LojaToTags"("B");
