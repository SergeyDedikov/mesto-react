import React from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isConfirmationPopupOpen, setConfirmationPopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setConfirmationPopupOpen(false);
    
  }

  return (
    <>
      <Header />
      <Main
        onEditAvatar={() => handleEditAvatarClick()}
        onEditProfile={() => handleEditProfileClick()}
        onAddPlace={() => handleAddPlaceClick()}
      />
      <Footer />
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={() => closeAllPopups()}
        name={"edit-avatar"}
        title={"Обновить аватар"}
        textButtonSubmit={"Сохранить"}
        children={
          <fieldset className="popup__input-container">
            <label className="popup__field">
              <input
                id="avatar"
                className="popup__input popup__input_value_link"
                type="url"
                name="avatar"
                placeholder="Ссылка на аватар"
                required
              />
              <span id="avatar-error" className="popup__error"></span>
            </label>
          </fieldset>
        }
      />
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={() => closeAllPopups()}
        name={"edit-profile"}
        title={"Редактировать профиль"}
        textButtonSubmit={"Сохранить"}
        children={
          <fieldset className="popup__input-container">
            <label className="popup__field">
              <input
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
        }
      />
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={() => closeAllPopups()}
        name={"add-place"}
        title={"Новое место"}
        textButtonSubmit={"Создать"}
        children={
          <fieldset className="popup__input-container">
            <label className="popup__field">
              <input
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
        }
      />
      <PopupWithForm
        isOpen={isConfirmationPopupOpen}
        onClose={() => closeAllPopups()}
        name={"confirmation"}
        title={"Вы уверены?"}
        textButtonSubmit={"Да"}
        children={<></>}
      />
      

      <template id="card-template">
        <li>
          <figure className="card">
            <img className="card__photo" />
            <figcaption className="card__info">
              <h2 className="card__description"></h2>
              <div className="card__likes-box">
                <button
                  className="card__button-like button"
                  type="button"
                ></button>
                <p className="card__likes-count"></p>
              </div>
              <button
                className="card__button-remove button"
                type="button"
              ></button>
            </figcaption>
          </figure>
        </li>
      </template>
    </>
  );
}

export default App;
