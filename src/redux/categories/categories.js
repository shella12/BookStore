const STATUS = 'bookstore/categoryReducer/CHECK_STATUS';
const initialState = '';
const categoryReducer = (categories = initialState, action) => {
  switch (action.type) {
    case STATUS: {
      console.log('goy');
      return categories.concat(' ', 'Under construction');
    }

    default:
      return categories;
  }
};
export const chkStatus = () => ({
  type: STATUS,
});

export default categoryReducer;
