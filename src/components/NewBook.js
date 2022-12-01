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
  };
  return (
    <form>
      <input className="Lesson-input" type="text" name="title" placeholder="Book title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input className="Lesson-input" type="text" name="author" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <select className="Lesson-Select" name="categories" id="categories" onChange={(e) => changeColor(e)}>
        <option value="" disabled selected hidden>Category</option>
        <option value="Sci-Fi" onSelect={(e) => setCategories(e.target.value)}>Sci-Fi</option>
        <option value="Romance" onSelect={(e) => setCategories(e.target.value)}>Romance</option>
        <option value="Drama" onSelect={(e) => setCategories(e.target.value)}>Drama</option>
        <option value="Fiction" onSelect={(e) => setCategories(e.target.value)}>Fiction</option>
        <option value="Mystery" onSelect={(e) => setCategories(e.target.value)}>Mystery</option>
        <option value="Biography" onSelect={(e) => setCategories(e.target.value)}>Biography</option>
        <option value="Autobiography" onSelect={(e) => setCategories(e.target.value)}>Autobiography</option>
        <option value="Comedy" onSelect={(e) => setCategories(e.target.value)}>Comedy</option>
        <option value="Horror" onSelect={(e) => setCategories(e.target.value)}>Horror</option>
        <option value="Thriler" onSelect={(e) => setCategories(e.target.value)}>Thriler</option>
      </select>
      <button className="add-book-btn" type="submit" onClick={(event) => onClickHandler(event)}>submit</button>
    </form>

  );
}

export default NewBook;
