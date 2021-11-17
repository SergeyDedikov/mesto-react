import React from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsConfirmationPopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <>
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={(card) => handleCardClick(card)}
      />
      <Footer />
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        name={"edit-avatar"}
        title={"Обновить аватар"}
        textButtonSubmit={"Сохранить"}
      >
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
      </PopupWithForm>
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        name={"edit-profile"}
        title={"Редактировать профиль"}
        textButtonSubmit={"Сохранить"}
      >
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
      </PopupWithForm>
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        name={"add-place"}
        title={"Новое место"}
        textButtonSubmit={"Создать"}
      >
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
      </PopupWithForm>
      <PopupWithForm
        isOpen={isConfirmationPopupOpen}
        onClose={closeAllPopups}
        name={"confirmation"}
        title={"Вы уверены?"}
        textButtonSubmit={"Да"}
      />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </>
  );
}

export default App;
