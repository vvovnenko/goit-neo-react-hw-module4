import toast from "react-hot-toast";

import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const query = form.elements.query.value.trim();

    if (query === "") {
      toast.error("Please enter search term!");
      return;
    }
    onSubmit(query);
    form.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
          className={css.searchInput}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
