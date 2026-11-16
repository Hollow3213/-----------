function Profile() {
  return (
    <div className="header__profile">
      <button
        type="button"
        className="header__profile-button button"
        aria-label="Меню профиля"
        aria-expanded="false"
      >
        <svg
          className="header__icon"
          width="24"
          height="24"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.56 18H3.44C2.73 18 2.21 17.3 2.48 16.66C3.71 13.7 6.62 12 10 12C13.38 12 16.29 13.7 17.52 16.66C17.79 17.3 17.27 18 16.56 18ZM6.92 6C6.92 3.79 8.75 2 10 2C12.25 2 14.08 3.79 14.08 6C14.08 8.21 12.25 10 10 10C7.75 10 6.92 8.21 6.92 6Z"
            fill="currentColor"
          />
        </svg>
      </button>

      <div className="header__profile-menu" hidden>
        <a className="header__profile-link" href="#">
          Профиль
        </a>
        <a className="header__profile-link" href="#">
          Настройки
        </a>
        <button className="header__profile-link" type="button">
          Выйти
        </button>
      </div>
    </div>
  );
}

export default Profile;
