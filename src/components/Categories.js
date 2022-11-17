import { useDispatch, useSelector } from 'react-redux';
import { chkStatus } from '../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();
  const display = useSelector((state) => state.categoriesR);
  const statusCheck = () => {
    dispatch(chkStatus());
    console.log(display);
  };

  return (
    <div>
      <button type="button" onClick={statusCheck}>Check status</button>
      <h1>{display}</h1>
    </div>
  );
}

export default Categories;
