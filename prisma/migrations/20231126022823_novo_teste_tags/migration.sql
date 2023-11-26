/*
  Warnings:

  - The primary key for the `Tags` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idTag` on the `Tags` table. All the data in the column will be lost.
  - You are about to drop the column `tags` on the `Tags` table. All the data in the column will be lost.
  - Added the required column `id` to the `Tags` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tag` to the `Tags` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "TagsLojas" (
    "lojaId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,

    PRIMARY KEY ("lojaId", "tagId"),
    CONSTRAINT "TagsLojas_lojaId_fkey" FOREIGN KEY ("lojaId") REFERENCES "Loja" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "TagsLojas_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tags" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tags" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tag" TEXT NOT NULL
);
DROP TABLE "Tags";
ALTER TABLE "new_Tags" RENAME TO "Tags";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
