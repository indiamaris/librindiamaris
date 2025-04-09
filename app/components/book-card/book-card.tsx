"use client"

import RateReviewIcon from '@mui/icons-material/RateReview';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import Rating from '@mui/material/Rating';
import {useState} from 'react';
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
    <Card sx={{ minWidth: 275, maxWidth: 345, m: 2 }}>
      <Grid container spacing={2}  xs={12}>
          <Grid size={{ xs: 12, md: 8 }}>
            <CardContent>
                      
              <Typography variant="h6" component="div">
                {book.title}
              </Typography>
              <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                
                {book.authors}
              </Typography>


              <Typography sx={{ color: 'text.secondary', fontSize:12   }}>
        Publisher:       {book.publisher}
              </Typography>
                      <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize:12   }}>
        ISBN:       {book.isbn}
              </Typography>

              <Typography variant="body2">
                {book.resume}
              </Typography>
            </CardContent>
          </Grid>

          <Grid size={{ xs: 12, md: 4, }}>
           
            <CardMedia
            component="img"
               height="10"
              image="/book-example.png"
              alt={`${book.title} cover`}
              sx={{ objectFit: 'contain',maxHeight: 200 }}
            />
            <CardActions sx={{ color: 'text.warning', p: 0,m:0 }}>
              <Rating
        name="simple-controlled"
         size="small"
        precision={0.5}
        value={stars}
        onChange={(event, newValue) => {
          setStars(newValue);
        }}
      />
      
            </CardActions>
            
          <CardActions sx={{display:'flex',  justifyContent: "end",
    alignItems: "end", }}>
            
          <RateReviewIcon color='primary'/>
      
            </CardActions>
          </Grid>
        </Grid>
    
    </Card>
  );
};

export default BookCard;
