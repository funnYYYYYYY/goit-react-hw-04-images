import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(prev => ({ showModal: !prev.showModal }));
  };

  render() {
    return (
      <li className="ImageGalleryItem">
        <img
          onClick={this.toggleModal}
          className="ImageGalleryItem-image"
          src={this.props.largeImageURL}
          alt=""
        />
        {this.state.showModal && (
          <Modal
            alt={this.props.alt}
            modalImg={this.props.largeImageURL}
            closeModal={this.toggleModal}
          />
        )}
      </li>
    );
  }
}
