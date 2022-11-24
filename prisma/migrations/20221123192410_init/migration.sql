-- CreateTable
CREATE TABLE "Questions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "number" INTEGER NOT NULL,
    "question" TEXT NOT NULL,
    "option1" TEXT NOT NULL,
    "option2" TEXT NOT NULL,
    "option3" TEXT NOT NULL,
    "option4" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Questions_number_key" ON "Questions"("number");

-- CreateIndex
CREATE UNIQUE INDEX "Questions_question_key" ON "Questions"("question");
