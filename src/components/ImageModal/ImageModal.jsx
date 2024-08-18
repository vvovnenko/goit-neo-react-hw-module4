import Modal from "react-modal";

import css from "./ImageModal.module.css";

const ImageModal = ({ modalIsOpen, closeModal, img: { src, alt } }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={css.modal}
      overlayClassName={css.modalOverlay}
      appElement={document.getElementById("root")}
    >
      <div>
        <img className={css.modalImg} src={src} alt={alt} />
      </div>
      <p className={css.modalText}>{alt}</p>
    </Modal>
  );
};

export default ImageModal;
