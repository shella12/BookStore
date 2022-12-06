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
  const changeColor = (e) => {
    e.target.style.color = '#000';
    setCategories(e.target.value);
  };
  return (
    <form>
      {console.log(categories)}
      <input className="Lesson-input" type="text" name="title" placeholder="Book title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input className="Lesson-input" type="text" name="author" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
      <select defaultValue={'DEFAULT'} className="Lesson-Select" name="categories" id="categories" onChange={(e) => changeColor(e)}>
        <option value="DEFAULT" disabled>Category</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Romance">Romance</option>
        <option value="Drama">Drama</option>
        <option value="Fiction">Fiction</option>
        <option value="Mystery">Mystery</option>
        <option value="Biography">Biography</option>
        <option value="Autobiography">Autobiography</option>
        <option value="Comedy">Comedy</option>
        <option value="Horror">Horror</option>
        <option value="Thriler">Thriler</option>
      </select>
      <button className="add-book-btn" type="submit" onClick={(event) => onClickHandler(event)}>submit</button>
    </form>

  );
}

export default NewBook;
