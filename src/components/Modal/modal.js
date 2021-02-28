import React, { useEffect } from "react";
import "./modal.scss";
import { Close } from "../../assets/svg";

const Modal = ({ isVisible = false, title, content, onClose }) => {
  const keydownHandler = ({ key }) => {
    switch (key) {
      case "Escape":
        onClose();
        break;
      default:
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  });

  return !isVisible ? null : (
    <aside className="modal" onClick={onClose}>
      <div className="modal__dialog" onClick={e => e.stopPropagation()}>
        <div className="modal__header">
          <h3 className="modal__title">{title}</h3>
          <span className="modal__close" onClick={onClose}>
            <img src={Close} alt={"close"} />
          </span>
        </div>
        <div className="modal__body">{content}</div>
      </div>
    </aside>
  );
};

export default Modal;
