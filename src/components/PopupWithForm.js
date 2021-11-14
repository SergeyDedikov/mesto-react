function PopupWithForm(props) {
  if (props.isOpen) {
    document
      .querySelector(`.popup_type_${props.name}`)
      .classList.add("popup_opened");
  }

  return (
    <div className={`popup popup_type_${props.name}`}>
      <div className={`popup__container popup__container_type_${props.name}`}>
        <form
          name={`${props.name}`}
          className={`popup__form popup__form_${props.name}`}
          noValidate
        >
          <h3 className="popup__heading">{props.title}</h3>
          {props.children}
          <button className="popup__button button" type="submit">
            {props.textButtonSubmit}
          </button>
          <button className="popup__close button" type="button"></button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
