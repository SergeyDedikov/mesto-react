function ImagePopup() {
  return (
    <div className="popup popup_type_card">
      <figure className="popup__card">
        <img className="popup__card-image" />
        <figcaption className="popup__card-info">
          <p className="popup__card-description"></p>
          <button
            className="popup__close popup__close_card button"
            type="button"
          ></button>
        </figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
