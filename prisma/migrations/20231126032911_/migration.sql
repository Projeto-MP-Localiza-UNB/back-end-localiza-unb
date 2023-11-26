/*
  Warnings:

  - You are about to drop the column `latitude_fixa` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `longitude_fixa` on the `Usuario` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "_LojaToUsuario" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_LojaToUsuario_A_fkey" FOREIGN KEY ("A") REFERENCES "Loja" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_LojaToUsuario_B_fkey" FOREIGN KEY ("B") REFERENCES "Usuario" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "admin" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Usuario" ("admin", "email", "id", "nome", "senha") SELECT "admin", "email", "id", "nome", "senha" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_LojaToUsuario_AB_unique" ON "_LojaToUsuario"("A", "B");

-- CreateIndex
CREATE INDEX "_LojaToUsuario_B_index" ON "_LojaToUsuario"("B");
