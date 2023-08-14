// modal (互動視窗)
import { useGlobalContext } from "./content";
import { FaTimes } from "react-icons/fa";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();

  return (
    // overlay 是用來覆蓋 main 內容
    <div className={isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}>
      <div className="modal-container">
        <h3>modal content</h3>
        <button type="button" onClick={closeModal} className="modal-close-btn">
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
