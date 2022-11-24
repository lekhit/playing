/*
  Warnings:

  - You are about to drop the column `option1` on the `Questions` table. All the data in the column will be lost.
  - You are about to drop the column `option2` on the `Questions` table. All the data in the column will be lost.
  - You are about to drop the column `option3` on the `Questions` table. All the data in the column will be lost.
  - You are about to drop the column `option4` on the `Questions` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Option" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "choise" TEXT NOT NULL,
    "questionsId" INTEGER,
    CONSTRAINT "Option_questionsId_fkey" FOREIGN KEY ("questionsId") REFERENCES "Questions" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Questions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "number" INTEGER NOT NULL,
    "question" TEXT NOT NULL
);
INSERT INTO "new_Questions" ("id", "number", "question") SELECT "id", "number", "question" FROM "Questions";
DROP TABLE "Questions";
ALTER TABLE "new_Questions" RENAME TO "Questions";
CREATE UNIQUE INDEX "Questions_number_key" ON "Questions"("number");
CREATE UNIQUE INDEX "Questions_question_key" ON "Questions"("question");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
