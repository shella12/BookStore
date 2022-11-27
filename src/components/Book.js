import PropTypes from 'prop-types';

const Book = (props) => {
  const {
    id, title, author, onRemove,
  } = props;
  return (
    <div>
      <li id={id}>
        {title}
        {' '}
        ,&nbsp;
        {' '}
        {author}
      </li>
      <button type="button" id={id} onClick={(e) => onRemove(e)}>Remove</button>
    </div>
  );
};
Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Book;
