import { prisma } from '@/prisma/client';
import { Prisma } from '@prisma/client';
export const addBook = async (book: Prisma.BooksCreateInput) => {
    const books = await prisma.books.findMany();
    // Check if the book already exists
    const existingBook = books.find(b => b.title === book.title);
    if (existingBook) {
        // If the book already exists, return it
        return existingBook;
    }
    // If the book doesn't exist, add it to the database
  const newBook = await prisma.books.create({
      
        data: {
            ...book,
        },
    });
    // Return the newly added book
    return newBook;
};
