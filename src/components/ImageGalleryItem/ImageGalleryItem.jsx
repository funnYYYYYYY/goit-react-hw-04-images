import Modal from 'components/Modal/Modal';

import { useState } from 'react';

export default function ImageGalleryItem({ alt, largeImageURL }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prev => !prev.showModal);
  };

  return (
    <li className="ImageGalleryItem">
      <img
        onClick={toggleModal}
        className="ImageGalleryItem-image"
        src={largeImageURL}
        alt=""
      />
      {showModal && (
        <Modal alt={alt} modalImg={largeImageURL} closeModal={toggleModal} />
      )}
    </li>
  );
}
