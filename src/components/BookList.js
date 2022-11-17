import PropTypes from 'prop-types';
import Book from './Book';

const BookList = (props) => {
  const { books, onRemove } = props;
  console.log(books);
  return (
    <div>
      <ul>
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            onRemove={onRemove}
          />
        ))}
      </ul>
    </div>
  );
};
BookList.propTypes = {
  books: PropTypes.arrayOf(
    ({
      id: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
    }),
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
};
export default BookList;
