// app/books/page.tsx
import BookCard from '../../components/book-card/book-card';
import { findBooks } from '../../lib/books/find-books';
const BookAddPage = async () => {
    const books = await findBooks();

    return (
        <div>
            {books.map((book: any) => (
                <BookCard book={book}/>
            ))}
            <div>
                <button> Add new book</button>
            </div>
        </div>
    );
};
export default BookAddPage;
