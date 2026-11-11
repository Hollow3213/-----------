import { useState } from "react";
import HomeIcon from "./sidebar-icons/HomeIcon.jsx";
import TasksIcon from "./sidebar-icons/TasksIcon.jsx";
import ProjectsIcon from "./sidebar-icons/ProjectsIcon.jsx";
import CalendarIcon from "./sidebar-icons/CalendarIcon.jsx";
import StatsIcon from "./sidebar-icons/StatsIcon.jsx";
function Sidebar() {
  const [activeLink, setActiveLink] = useState("home");

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const links = [
    {
      id: "home",
      title: "Главная",
      icon: <HomeIcon />,
    },
    {
      id: "tasks",
      title: "Мои задачи",
      icon: <TasksIcon />,
    },
    {
      id: "projects",
      title: "Проекты",
      icon: <ProjectsIcon />,
    },
    {
      id: "calendar",
      title: "Календарь",
      icon: <CalendarIcon />,
    },
    {
      id: "stats",
      title: "Статистика",
      icon: <StatsIcon />,
    },
  ];
  return (
    <aside
      className={isSidebarCollapsed ? "sidebar sidebar__collapsed" : "sidebar"}
    >
      <div className="sidebar__style">
        <div className="sidebar__headline">
          <a className="sidebar__logo" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="48"
              height="48"
              viewBox="0 0 100 100"
            >
              <path
                fill="var(--color-purple)"
                d="M38.5,93c-7.513,0-13.709-5.743-14.43-13.07 C16.744,79.209,11,73.013,11,65.5v-40C11,17.505,17.505,11,25.5,11h40c7.513,0,13.709,5.743,14.43,13.07 C87.256,24.791,93,30.987,93,38.5v40C93,86.495,86.495,93,78.5,93H38.5z"
                opacity=".35"
              ></path>
              <path
                fill="var(--color-text-primary)"
                d="M36.5,91c-7.513,0-13.709-5.743-14.43-13.07C14.744,77.209,9,71.013,9,63.5v-40 C9,15.505,15.505,9,23.5,9h40c7.513,0,13.709,5.743,14.43,13.07C85.256,22.791,91,28.987,91,36.5v40C91,84.495,84.495,91,76.5,91 H36.5z"
              ></path>
              <path
                fill="var(--color-accent)"
                d="M76.5,84.5h-40c-4.418,0-8-3.582-8-8v-40c0-4.418,3.582-8,8-8h40c4.418,0,8,3.582,8,8v40 C84.5,80.918,80.918,84.5,76.5,84.5z"
              ></path>
              <path
                fill="var(--color-cyan)"
                d="M62,70H23.5c-4.418,0-8-3.582-8-8V23.5c0-4.418,3.582-8,8-8H62c4.418,0,8,3.582,8,8V62 C70,66.418,66.418,70,62,70z"
              ></path>
              <path
                fill="none"
                stroke="var(--color-purple)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="3"
                d="M76.5,28.5h-5v-5c0-4.418-3.582-8-8-8h-40c-4.418,0-8,3.582-8,8v40c0,4.418,3.582,8,8,8h5v5c0,4.418,3.582,8,8,8h40 c4.418,0,8-3.582,8-8v-40C84.5,32.082,80.918,28.5,76.5,28.5z"
              ></path>
              <g>
                <path
                  fill="var(--color-text-primary)"
                  d="M36.393,56.701c-0.677,0-1.355-0.258-1.871-0.774l-8.845-8.83 c-1.036-1.033-1.037-2.711-0.003-3.746c1.033-1.036,2.711-1.038,3.746-0.003l6.972,6.96l21.087-21.086 c1.035-1.035,2.711-1.035,3.746,0c1.035,1.034,1.035,2.711,0,3.746L38.266,55.925C37.749,56.443,37.071,56.701,36.393,56.701z"
                ></path>
              </g>
            </svg>
          </a>
          <button
            type="button"
            className="sidebar__button"
            onClick={() => {
              setIsSidebarCollapsed((prev) => !prev);
            }}
          >
            <svg
              className="sidebar__toggle"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11 5V19M6 8H8M6 11H8M6 14H8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <h2 className="sidebar__title">
            Task <span className="sidebar__decor">Tracker</span>
          </h2>
          <p className="sidebar__tagline">
            PLAN · <span className="sidebar__decor">DO · ACHIEVE</span>
          </p>
        </div>

        <nav className="sidebar__navigation">
          <ul className="sidebar__list">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  className={
                    activeLink === link.id
                      ? "sidebar__link sidebar__link_active"
                      : "sidebar__link"
                  }
                  href="#"
                  data-tooltip={link.title}
                  onClick={() => {
                    setActiveLink(link.id);
                  }}
                >
                  {link.icon}
                  <span className="sidebar__link-text">{link.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
