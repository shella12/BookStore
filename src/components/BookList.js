import PropTypes from 'prop-types';
import Book from './Book';

const BookList = (props) => {
  const { books } = props;
  return (
    <div>
      <ul>
        {books.map((books) => (
          <Book
            key={books.id}
            title={books.title}
            author={books.author}
          />
        ))}
      </ul>
    </div>
  );
};
BookList.propTypes = {
  books: PropTypes.arrayOf(
    ({
      title: PropTypes.string,
      author: PropTypes.string,
    }),
  ).isRequired,
};
export default BookList;
