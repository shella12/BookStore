function NewBook() {
  // const [ books, setbooks] = useState(null);
  // changeHandler = (value) => {
  //     console.log(value);
  // }
  return (
    <form>
      {/* <label>title</label> */}
      <input type="text" placeholder="title" />

      {/* <label>Author</label> */}
      <input type="text" placeholder="author" />

    </form>

  );
}

export default NewBook;
