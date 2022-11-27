const api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const apiId = 'dicpXmbT1yHGAHwOAKQA/';
const addBooksApi = async (data) => {
  const response = await fetch(`${api}${apiId}books/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  }).then((response) => response.text());
  return response;
};
export const getBooksApi = async () => {
  const response = await fetch(`${api}${apiId}books/`)
    .then((response) => response.json());
  return response;
};
export const deleteBooksApi = async (id) => {
  const response = await fetch(`${api}${apiId}books/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.text());
  return response;
};

export default addBooksApi;
