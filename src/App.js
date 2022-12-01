import { Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import Categories from './components/Categories';
import Books from './components/Books';
import avatar from './css/avatar.png';

function App() {
  const [isBooksClassActive, setIsBooksClassActive] = useState(true);
  const [isCatClassActive, setIsCatClassActive] = useState(false);
  const onClickHandlerBooks = () => {
    setIsBooksClassActive(true);
    setIsCatClassActive(false);
  };
  const onClickHandlerCat = () => {
    setIsBooksClassActive(false);
    setIsCatClassActive(true);
  };

  return (
    <div className="App">
      <div className="header">
        <div>
          <h1>BookStore CMS</h1>
          <nav className="navbar">
            <Link id="books-link" className={`${isBooksClassActive ? 'active' : ''}`} onClick={onClickHandlerBooks} to="/">Books</Link>
            <Link id="category-link" className={`${isCatClassActive ? 'active' : ''}`} onClick={onClickHandlerCat} to="/Categories">Categories</Link>
          </nav>
        </div>
        <img src={avatar} alt="login-icon" />
      </div>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
