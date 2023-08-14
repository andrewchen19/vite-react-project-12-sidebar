import { useGlobalContext } from "./content";
import { links, social } from "./data";
import { FaTimes } from "react-icons/fa";
import logo from "./logo.svg";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar "}>
      <div className="sidebar-header">
        <img src={logo} alt="logo" className="logo" />
        <button
          type="button"
          className="sidebar-close-btn"
          onClick={closeSidebar}
        >
          <FaTimes />
        </button>
      </div>

      <div className="sidebar-links">
        <ul className="links">
          {links.map((link) => {
            const { id, url, text, icon } = link;
            return (
              <li key={id}>
                <a href={url}>
                  {icon}
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="sidebar-icons">
        <ul className="icons">
          {social.map((item) => {
            const { id, url, icon } = item;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
