import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, fetchBooks } from '../redux/books/book';

function NewBook() {
  let nextBookId = 0;
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [categories, setCategories] = useState('');
  const dispatch = useDispatch();
  const onClickHandler = (e) => {
    e.preventDefault();
    nextBookId = uuidv4();
    const bookObject = {
      item_id: nextBookId,
      title,
      author,
      category: categories,
    };
    dispatch(addBook(bookObject));
    setAuthor('');
    setTitle('');
    setCategories('');
    dispatch(fetchBooks());
  };
  return (
    <form>
      <input type="text" name="title" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" name="author" placeholder="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <input type="text" name="categories" placeholder="categories" value={categories} onChange={(e) => setCategories(e.target.value)} />
      <button type="submit" onClick={(event) => onClickHandler(event)}>submit</button>
    </form>

  );
}

export default NewBook;
