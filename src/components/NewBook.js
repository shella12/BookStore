import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/book';

function NewBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const onClickHandler = (e) => {
    e.preventDefault();
    dispatch(addBook(title, author));
    setAuthor('');
    setTitle('');
  };
  return (
    <form>
      <input type="text" name="title" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" name="author" placeholder="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button type="submit" onClick={(event) => onClickHandler(event)}>submit</button>
    </form>

  );
}

export default NewBook;
