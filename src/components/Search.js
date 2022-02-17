import '../styles/search.css';

import searchIcon from '../img/icons/search.svg';

const Search = () => {
  return (
    <div className="search">
      <label
        htmlFor="search"
        className="search__label"
      >
        <img
          src={searchIcon}
          alt="search icon"
          className="search__icon"
        />
      </label>
      <input
        id="search"
        type="text"
        className="search__field"
        placeholder="Поиск"
      />
    </div>
  );
};


export { Search };
