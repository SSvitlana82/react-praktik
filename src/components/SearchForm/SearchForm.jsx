import { useRef } from "react";

const SearchForm = ({ onSearch }) => {
  const inputRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    /* 
    const search = form.elements.search.value.trim(); */
    const search = inputRef.current.value.trim();
    if (search.length !== 0) {
      onSearch(search);
    } else {
      alert("Please enter search term!");
    }

    form.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        name="search"
        placeholder="Search articles..."
      ></input>
      <button>Search</button>
    </form>
  );
};

export default SearchForm;
