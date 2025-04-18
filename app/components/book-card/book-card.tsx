"use client";

import { CardActions } from "@mui/material";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { FC, useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Divider from "@mui/material/Divider";
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
    <Box
      sx={{
        backgroundColor: "white",
        border: "none",
        borderRadius: "10px",
        shadow: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "start",
          width: 200,
          color: "white",
          padding: "1rem",
        }}
      >
        <Typography
          data-testid={"book-title"}
          component="span"
          className={"headerBook"}
          sx={{ pb: "2px" }}
        >
          {book.title}
        </Typography>

        <Typography
          className={"headerBook"}
          data-testid={"book-authors"}
          gutterBottom
          sx={{ color: "dimgrey", fontSize: 14 }}
        >
          by {book.authors}
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

        <Typography
          data-testid={"book-authors"}
          gutterBottom
          sx={{ color: "dimgrey", fontSize: 14 }}
        >
          {book.resume.slice(0, 200)}
        </Typography>
        <MoreHorizIcon color="secondary" sx={{ alignSelf: "end" }} />
      </Box>
    </Box>
  );
};

export default BookCard;
