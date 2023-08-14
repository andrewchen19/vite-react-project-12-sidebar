// import custom hook
import { useGlobalContext } from "./content";

import { FaBars } from "react-icons/fa";

const Home = () => {
  // use custom hook
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main>
      <button type="button" onClick={openSidebar} className="sidebar-toggle">
        <FaBars />
      </button>
      <button type="button" onClick={openModal} className="btn">
        show modal
      </button>
    </main>
  );
};

export default Home;
