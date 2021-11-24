import { useState, useEffect, useContext } from "react";
import { CurentUserContext } from "../contexts/CurrentUserContext";

import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  const currentUser = useContext(CurentUserContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      name={"edit-profile"}
      title={"Редактировать профиль"}
      textButtonSubmit={"Сохранить"}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__input-container">
        <label className="popup__field">
          <input
            value={name}
            onChange={handleChangeName}
            id="name"
            className="popup__input popup__input_value_name"
            type="text"
            name="name"
            required
            minLength="2"
            maxLength="40"
          />
          <span id="name-error" className="popup__error"></span>
        </label>
        <label className="popup__field">
          <input
            value={description}
            onChange={handleChangeDescription}
            id="job"
            className="popup__input popup__input_value_job"
            type="text"
            name="job"
            required
            minLength="2"
            maxLength="200"
          />
          <span id="job-error" className="popup__error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
