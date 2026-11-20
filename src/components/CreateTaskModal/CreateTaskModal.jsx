function CreateTaskModal({ onClose }) {
  return (
    <div className="modal">
      <div className="modal__overlay">
        <div className="modal__content">
          <div className="modal__header">
            <div className="modal__header-title-container">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="Blue"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.59 13.41L13.42 20.58C13.05 20.95 12.45 20.95 12.08 20.58L3.42 11.92C3.15 11.65 3 11.28 3 10.89V4.5C3 3.67 3.67 3 4.5 3H10.89C11.28 3 11.65 3.15 11.92 3.42L20.59 12.08C20.95 12.45 20.95 13.05 20.59 13.41Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="7.5" cy="7.5" r="1.2" fill="currentColor" />
              </svg>
              <h2 className="modal__header-title">Новая задача</h2>
            </div>
            <button type="button" onClick={onClose}>
              <svg
                className="modal__header-close-btn"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="red"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.59 13.41L13.42 20.58C13.05 20.95 12.45 20.95 12.08 20.58L3.42 11.92C3.15 11.65 3 11.28 3 10.89V4.5C3 3.67 3.67 3 4.5 3H10.89C11.28 3 11.65 3.15 11.92 3.42L20.59 12.08C20.95 12.45 20.95 13.05 20.59 13.41Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="7.5" cy="7.5" r="1.2" fill="currentColor" />
              </svg>
            </button>
          </div>
          <div className="modal__content-form">
            <form className="modal__form">
              <label htmlFor="task-title">Название задачи</label>
              <input
                id="task-title"
                type="text"
                placeholder="Название задачи"
              />

              <label htmlFor="task-text">Описание задачи</label>
              <textarea id="task-text" placeholder="Описание задачи" />

              <label>Приоритет задачи</label>
              <select defaultValue="Средний">
                <option value="Высокий">Высокий</option>
                <option value="Средний">Средний</option>
                <option value="Низкий">Низкий</option>
              </select>

              <label htmlFor="task-tags">Теги</label>
              <input id="task-tags" type="text" placeholder="" />

              <label htmlFor="task-date">Дедлайн</label>
              <input id="task-date" type="date" placeholder="Выберите дату" />

              <button type="button" onClick={onClose}>
                Закрыть
              </button>
              <button type="submit">Создать</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTaskModal;
