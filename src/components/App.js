import React, { useState, useEffect } from "react";
import { CurentUserContext } from "../contexts/CurrentUserContext";

import "../index.css";
import api from "../utils/api";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";

function App() {
  // -- Переменная состояния профиля
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    // -- Запрос данных с сервера
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([user, cards]) => {
        setCurrentUser(user);

        //setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleUpdateUser(dataUser) {
    api
      .setUserInfo(dataUser)
      .then((newUser) => {
        setCurrentUser(newUser);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateAvatar(avatar) {
    api
      .setUserAvatar(avatar)
      .then((newUser) => {
        setCurrentUser(newUser);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // -- Переменные состояния попапов
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false);

  // -- Переменная состояния выбранной карточки
  const [selectedCard, setSelectedCard] = useState(null);

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
    <CurentUserContext.Provider value={currentUser}>
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={(card) => handleCardClick(card)}
      />
      <Footer />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={(avatar) => handleUpdateAvatar(avatar)}
      />
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={(dataUser) => handleUpdateUser(dataUser)}
      />

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
    </CurentUserContext.Provider>
  );
}

export default App;
