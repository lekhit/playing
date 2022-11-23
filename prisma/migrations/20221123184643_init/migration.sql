-- CreateTable
CREATE TABLE "Answers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "question" INTEGER NOT NULL,
    "option" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Answers_question_key" ON "Answers"("question");
