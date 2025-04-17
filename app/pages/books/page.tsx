// app/books/page.tsx
import Box from "@mui/material/Box";
import BookCard from "../../components/book-card/book-card";
import { findBooks } from "../../lib/books/find-books";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
const BookAddPage = async () => {
  const books = await findBooks();
  return (
    <Grid p={4}>
      <Box sx={{ display: "flex", justifyContent: "center" }} gap={4}>
        {books.map((book: any) => (
          <BookCard book={book} />
        ))}
      </Box>
    </Grid>
  );
};
export default BookAddPage;
