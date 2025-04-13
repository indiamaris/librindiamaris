import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const book1 = await prisma.books.upsert({
    where: { isbn: "9780061120084" },
    update: {},
    create: {
      isbn: "9780061120084",
      title: "To Kill a Mockingbird",
      authors: "Harper Lee",
      resume:
        "The story of racial injustice and the loss of innocence in the American South.",
      stars: 5,
      publisher: "HarperCollins",
    },
  });

  const book2 = await prisma.books.upsert({
    where: { isbn: "9780743273565" },
    update: {},
    create: {
      isbn: "9780743273565",
      title: "The Great Gatsby",
      authors: "F. Scott Fitzgerald",
      resume:
        "A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.",
      stars: 4,
      publisher: "Scribner",
    },
  });

  const book3 = await prisma.books.upsert({
    where: { isbn: "9780143105428" },
    update: {},
    create: {
      isbn: "9780143105428",
      title: "1984",
      authors: "George Orwell",
      resume:
        "A dystopian novel set in a totalitarian society ruled by the Party and its leader, Big Brother.",
      stars: 5,
      publisher: "Penguin Books",
    },
  });

  console.log({ book1, book2, book3 });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
