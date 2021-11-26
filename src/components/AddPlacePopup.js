import { useRef } from "react";
import { useEffect } from "react/cjs/react.development";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const cardName = useRef();
  const cardLink = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name: cardName.current.value,
      link: cardLink.current.value,
    });
  }
  
  useEffect(() => {
    // Очищаем поля ввода после отправки
    if (props.isSubmitted) {
      cardName.current.value = "";
      cardLink.current.value = "";
    }
  }, [props.isSubmitted]);

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name={"add-place"}
      title={"Новое место"}
      textButtonSubmit={props.isLoading ? "Сохранение..." : "Создать"}
    >
      <fieldset className="popup__input-container">
        <label className="popup__field">
          <input
            ref={cardName}
            id="place"
            className="popup__input popup__input_value_place"
            type="text"
            name="place"
            placeholder="Название"
            required
            minLength="2"
            maxLength="30"
          />
          <span id="place-error" className="popup__error"></span>
        </label>
        <label className="popup__field">
          <input
            ref={cardLink}
            id="link"
            className="popup__input popup__input_value_link"
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            required
          />
          <span id="link-error" className="popup__error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
