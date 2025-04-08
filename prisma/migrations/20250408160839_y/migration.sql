-- CreateTable
CREATE TABLE "Books" (
    "id" TEXT NOT NULL,
    "isbn" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "authors" TEXT NOT NULL,
    "resume" TEXT NOT NULL,
    "stars" INTEGER NOT NULL,
    "publisher" TEXT NOT NULL,

    CONSTRAINT "Books_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Books_isbn_key" ON "Books"("isbn");
