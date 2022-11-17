import { useDispatch, useSelector } from 'react-redux';
import BookList from './BookList';
import NewBook from './NewBook';
import { removeBook } from '../redux/books/book';

function Books() {
  const books = useSelector((state) => state.booksR);
  const dispatch = useDispatch();
  const onRemove = (e) => {
    dispatch(removeBook(e.target.id));
  };
  return (
    <div>
      <NewBook />
      <BookList books={books} onRemove={onRemove} />
    </div>
  );
}

export default Books;
