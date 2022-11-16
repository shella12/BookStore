const STATUS = 'CHECK_STATUS';
const initialState = [];
const categoryReducer = (categories = initialState, action) => {
  switch (action.type) {
    case STATUS:
      return 'Under construction';
    default:
      return categories;
  }
};
export const chkStatus = () => ({
  type: STATUS,
});

export default categoryReducer;
