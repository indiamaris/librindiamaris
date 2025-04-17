"use client";

import { CardActions } from "@mui/material";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import picture from "public/picture.png";
import { FC, useState } from "react";
import BookCover from "../book-cover/book-cover";
interface Book {
  id: string;
  isbn: string;
  title: string;
  authors: string;
  resume: string;
  stars: number;
  publisher: string;
}

interface BookCardProps {
  book: Book;
}

const BookCard: FC<BookCardProps> = ({ book }) => {
  const [stars, setStars] = useState(book.stars);

  return (
    <Box sx={{ backgroundColor: "transparent", border: "none", shadow: 0 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: 200,
        }}
      >
        <BookCover
          image={picture}
          stars={stars}
          setStars={setStars}
          alt={book.title}
        />

        <Typography
          data-testid={"book-title"}
          variant="title-md"
          component="div"
          sx={{ color: "purple" }}
        >
          {book.title}
        </Typography>
        <Typography
          data-testid={"book-authors"}
          gutterBottom
          sx={{ color: "dimgrey", fontSize: 14 }}
        >
          {book.authors}
        </Typography>

        <CardActions sx={{ color: "text.warning", p: 0, m: 0 }}>
          <Rating
            data-testid={"book-stars"}
            name="simple-controlled"
            size="small"
            precision={0.5}
            value={stars}
            onChange={(event, newValue) => {
              setStars(newValue);
            }}
          />
        </CardActions>
      </Box>
    </Box>
  );
};

export default BookCard;
