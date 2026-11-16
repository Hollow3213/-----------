function ThemeSwitch() {
  return (
    <div className="header__theme">
      <input
        type="checkbox"
        className="header__theme-input"
        id="theme-switch"
        aria-label="Переключить тёмную тему"
      />
      <label className="header__theme-switch" htmlFor="theme-switch">
        <span className="header__theme-slider"></span>
      </label>
    </div>
  );
}

export default ThemeSwitch;
