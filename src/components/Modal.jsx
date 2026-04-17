import React from "react";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        {children}

        <button className="modal-fechar" onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
}

export default Modal;