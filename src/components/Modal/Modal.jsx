// import { Component } from 'react';
import { createPortal } from 'react-dom';

import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ closeModal, alt, modalImg }) {
  useEffect(() => {
    const closeByEscape = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', closeByEscape);

    return () => {
      window.removeEventListener('keydown', closeByEscape);
    };
  });

  return createPortal(
    <div className="Overlay" onClick={closeModal}>
      <div className="Modal">
        <img src={modalImg} alt={alt} />
      </div>
    </div>,
    modalRoot
  );
}
