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

  // -- Состояние карточек
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // -- Запрос данных с сервера
    Promise.all([api.getUserInfo(), api.getCardList()])
      .then(([userData, cardsData]) => {
        setCurrentUser(userData);
        setCards(cardsData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // -- Лайки, лайки, лайки

  function handleCardLike(card) {
    // Проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  // -- Удаление карточки

  function handleCardDelete(card) {
    api
      .deleteCard(card)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateUser(userData) {
    api
      .setUserInfo(userData)
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
        cards={cards}
        onCardClick={(card) => handleCardClick(card)}
        onCardLike={(card) => handleCardLike(card)}
        onCardDelete={(card) => handleCardDelete(card)}
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
        onUpdateUser={(userData) => handleUpdateUser(userData)}
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
