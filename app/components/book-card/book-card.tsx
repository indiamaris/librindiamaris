import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import StarIcon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

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
  const renderStars = (stars: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <StarIcon
        key={index}
        sx={{
          color: index < stars ? 'warning.main' : 'action.disabled',
          fontSize: '20px'
        }}
      >
        star
      </StarIcon>
    ));
  };

  return (
    <Card sx={{ minWidth: 275, maxWidth: 345, m: 2 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          {book.authors}
        </Typography>

        <Typography variant="h5" component="div">
          {book.title}
        </Typography>

        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
          {book.publisher}
        </Typography>

        <Typography variant="body2">
          {book.resume}
        </Typography>
      </CardContent>

      <CardActions sx={{ color: 'text.warning', mb: 1.5 }}>
        {renderStars(book.stars)}
      </CardActions>
            
      <CardActions>
        <Button size="small" variant="contained" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default BookCard;
