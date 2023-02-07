import styles from "./Modal.module.css";
import ReactDom from "react-dom";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const overlayElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <>
      {ReactDom.createPortal(<Backdrop onClick={props.onClick} />, overlayElement)}
      {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, overlayElement)}
    </>
  );
};

export default Modal;
