function CreateTaskCard({ onOpenModal }) {
  return (
    <button className="main__create-task" type="button" onClick={onOpenModal}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 32 32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="main__create-icon"
      >
        <defs>
          <linearGradient id="plus-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-purple)" />
          </linearGradient>
        </defs>
        <path
          d="M28 12H20V4C20 1.79 18.21 0 16 0S12 1.79 12 4V12H4C1.79 12 0 13.79 0 16S1.79 20 4 20H12V28C12 30.21 13.79 32 16 32S20 30.21 20 28V20H28C30.21 20 32 18.21 32 16S30.21 12 28 12Z"
          fill="url(#plus-gradient)"
        />
      </svg>
      <h3 className="main__create-title">Создать новую задачу</h3>
      <p className="main__create-text">Добавь то, что нужно сделать</p>
    </button>
  );
}

export default CreateTaskCard;
