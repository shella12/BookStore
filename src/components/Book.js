import PropTypes from 'prop-types';

const Book = (props) => {
  const {
    id, title, author, category, onRemove,
  } = props;
  return (
    <div className="book-list">
      <div className="book-details-col1">
        <li id={id}>
          <h3 className="book-category">{category}</h3>
          <h2 className="book-title">{title}</h2>
          <h3 className="book-author">{author}</h3>
        </li>
        <ul className="list-btn-ul">
          <button className="list-btn" type="button" id={id}>Comments</button>
          <button className="list-btn" type="button" id={id} onClick={(e) => onRemove(e)}>Remove</button>
          <button className="list-btn" type="button" id={id}>Edit</button>
        </ul>
      </div>
      <div className="book-details-col2">
        <div className="book-details-col2-1">
          <div className="circle">&nbsp;</div>
          <div>
            <h2 className="percentage">64%</h2>
            <h3 className="completed-text">Completed</h3>
          </div>
        </div>
        <div className="book-details-col2-2">
          <div>
            <h2 className="current-chapter">Current Chapter</h2>
            <h3 className="progress">Chapter 3: &quot; A Lesson Learned &quot;</h3>
          </div>
          <button className="update-progress-btn" type="button">Update progress</button>
        </div>
      </div>
    </div>
  );
};
Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Book;
