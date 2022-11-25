-- AlterTable
ALTER TABLE "Questions" ADD COLUMN "answer" TEXT;

-- CreateTable
CREATE TABLE "Answer1" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "number" INTEGER NOT NULL,
    "ans" TEXT NOT NULL DEFAULT 'a',
    "time" INTEGER NOT NULL DEFAULT 15,
    "timestamp" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Answer1_number_key" ON "Answer1"("number");
