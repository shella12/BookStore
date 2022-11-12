import { Route, Routes, Link } from 'react-router-dom';
import Categories from './components/Categories';
import Books from './components/Books';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Book Store</h1>
        <ul>
          <li><Link to="/">Books</Link></li>
          <li><Link to="/Categories">Categories</Link></li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
