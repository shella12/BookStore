import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import BookList from './BookList';
import NewBook from './NewBook';
import { removeBook, fetchBooks } from '../redux/books/book';
import '../css/style.css';

function Books() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.booksR.status);
  const postBooks = useSelector((state) => state.booksR.books);
  const error = useSelector((state) => state.booksR.error);
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBooks()).unwrap();
    }
  }, [status, dispatch]);
  let message;
  let books = [];
  if (status === 'pending') {
    message = 'Loading...';
  } else if (status === 'success') {
    books = postBooks.map((books) => ({
      id: books.id,
      title: books.title,
      author: books.author,
      category: books.category,
    }));
    message = '';
  } else if (status === 'failed') {
    message = error;
  }
  const onRemove = (e) => {
    dispatch(removeBook(e.target.id));
  };
  return (
    <div className="books-cms">
      <BookList books={books} onRemove={onRemove} />
      <h1>{message}</h1>
      <span className="title">
        ADD NEW BOOK
      </span>
      <NewBook />
    </div>
  );
}
export default Books;
