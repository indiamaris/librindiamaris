
import { Card } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

const BookCover = ({ image,stars,setStars,alt }) => {
    return( <Card      sx={{
        height: 150,
        width: 'auto',
        display: 'flex',
        alignItems: 'center',
    
      }}>
           
            <CardMedia
            component="img"
              image="/book-example.png"
              alt={`${alt} cover`}
              sx={{ objectFit: 'contain',maxHeight: '150px' }}
        />
        
         
      
        
            
         
      
          </Card>)
}

export default BookCover