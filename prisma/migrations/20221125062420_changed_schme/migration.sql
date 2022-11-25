-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Questions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "number" INTEGER NOT NULL,
    "question" TEXT NOT NULL,
    "state" TEXT NOT NULL DEFAULT 'inactive',
    "time" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_Questions" ("id", "number", "question") SELECT "id", "number", "question" FROM "Questions";
DROP TABLE "Questions";
ALTER TABLE "new_Questions" RENAME TO "Questions";
CREATE UNIQUE INDEX "Questions_number_key" ON "Questions"("number");
CREATE UNIQUE INDEX "Questions_question_key" ON "Questions"("question");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
