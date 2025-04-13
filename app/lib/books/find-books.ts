import { prisma } from "../../../prisma/client";

export const findBooks = async () => {
  const books = await prisma.books.findMany();
  return books;
};
