/*
  Warnings:

  - You are about to alter the column `time` on the `Answer` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Answer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ans" TEXT NOT NULL DEFAULT 'a',
    "time" INTEGER NOT NULL DEFAULT 15,
    "timestamp" TEXT
);
INSERT INTO "new_Answer" ("ans", "id", "time") SELECT "ans", "id", "time" FROM "Answer";
DROP TABLE "Answer";
ALTER TABLE "new_Answer" RENAME TO "Answer";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
