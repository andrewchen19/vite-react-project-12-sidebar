// set up global context
import { createContext, useContext, useState } from "react";

const globalContext = createContext();
// export custom hook
export const useGlobalContext = () => useContext(globalContext);

const AppContext = (props) => {
  // state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // functionality
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <globalContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isModalOpen,
        openModal,
        closeModal,
      }}
    >
      {props.children}
    </globalContext.Provider>
  );
};

export default AppContext;
