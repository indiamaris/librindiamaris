import { FC } from 'react';

interface BookCardProps {
    book: {
        id: string;
        isbn: string;
        title: string;
        authors: string;
        resume: string;
        stars: number;
        publisher: string;
    };
}

const BookCard: FC<BookCardProps> = ({ book }) => {
    const renderStars = (stars: number) => {
        return Array.from({ length: 5 }).map((_, index) => (
            <input
                key={index}
                type="radio"
                name={`rating-${book.id}`}
                className="mask mask-star-2 bg-orange-400"
                checked={index < stars}
                readOnly
            />
        ));
    };

    return (
        <div className="card card-sm w-64 bg-accent shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{book.title}</h2>
                <p className="text-sm text-base-content/70">
                    by {book.authors}
                </p>
                <div className="rating rating-sm my-2">
                    {renderStars(book.stars)}
                </div>
                <p className="text-sm">{book.resume}</p>
                <div className="card-actions justify-between items-center mt-4">
                    <div className="badge badge-outline">{book.publisher}</div>
                    <div className="badge badge-primary">ISBN: {book.isbn}</div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
