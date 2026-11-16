import { useState } from "react";

function Search() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <search
      className={
        isSearchOpen ? "header__search header__search_open" : "header__search"
      }
    >
      <form className="header__search-form" role="search">
        <input
          type="search"
          id="search-input"
          name="search"
          className="header__search-input"
          placeholder="Введите запрос..."
          aria-label="Поиск задач"
        />
      </form>
      <button
        type="button"
        className="header__search-button button"
        aria-label="Найти"
        onClick={() => {
          setIsSearchOpen((prev) => !prev);
        }}
      >
        <svg
          className="header__icon"
          width="24"
          height="24"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 18.086L19.5153 19.5L15.06015 15.258L16.54485 13.843L21 18.086ZM8.4 14C4.9266 14 2.1 11.309 2.1 8C2.1 4.692 4.9266 2 8.4 2C11.8734 2 14.7 4.692 14.7 8C14.7 11.309 11.8734 14 8.4 14ZM8.4 0C3.7611 0 0 3.582 0 8C0 12.418 3.7611 16 8.4 16C13.0389 16 16.8 12.418 16.8 8C16.8 3.582 13.0389 0 8.4 0Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </search>
  );
}

export default Search;
