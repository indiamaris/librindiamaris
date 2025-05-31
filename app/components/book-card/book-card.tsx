"use client";

import { CardActions } from "@mui/material";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { FC, useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Divider from "@mui/material/Divider";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
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
          width: 220,
          color: "white",
          padding: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pb: "2px",
            width: "100%",
          }}
        >
          {" "}
          <Box>
            <Typography
              data-testid={"book-title"}
              component="div"
              className={"headerBook"}
            >
              {book.title}{" "}
            </Typography>{" "}
          </Box>
          <Box>
            <MoreVertIcon color="secondary" sx={{ alignSelf: "end" }} />
          </Box>
        </Box>
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
      </Box>
    </Box>
  );
};

export default BookCard;
