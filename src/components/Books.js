// import { useState } from 'react';
import BookList from './BookList';
import NewBook from './NewBook';

function Books() {
  const books = [
    {
      title: 'book1',
      author: 'John doe',
    },
    {
      title: 'book2',
      author: 'John doe2',
    },

  ];
  return (
    <div>
      <NewBook />
      <BookList books={books} />
      <button type="button">Remove</button>
    </div>
  );
}

export default Books;
