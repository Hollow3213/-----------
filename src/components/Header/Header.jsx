import Search from "./Search.jsx";
import Notifications from "./Notifications.jsx";
import ThemeSwitch from "./ThemeSwitch.jsx";
import Profile from "./Profile.jsx";
function Header() {
  return (
    <header className="header">
      <div className="header__actions">
        <div className="header__left">
          {/* ПОИСК */}
          <Search />
          {/* Уведомления */}
          <Notifications />
        </div>

        <div className="header__right">
          {/* переключатель темы */}
          <ThemeSwitch />
          {/* Профиль */}
          <Profile />
        </div>
      </div>
    </header>
  );
}

export default Header;
