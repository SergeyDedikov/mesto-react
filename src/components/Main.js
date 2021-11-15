import React from "react";
import api from "../utils/api";
import Card from "./Card";

function Main(props) {
  // -- Переменные состояния профиля
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  // -- Состояние карточек
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    // -- Запрос данных с сервера
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([user, cards]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="main">
      <section className="profile" aria-label="Профиль пользователя">
        <div className="profile__avatar-box">
          <img
            className="profile__avatar"
            src={userAvatar}
            alt="Аватар пользователя"
          />
          <button
            onClick={props.onEditAvatar}
            className="profile__button profile__button_type_avatar button"
            type="button"
          ></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button
            onClick={props.onEditProfile}
            className="profile__button profile__button_type_edit button"
            type="button"
          ></button>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button
          onClick={props.onAddPlace}
          className="profile__button profile__button_type_add button"
          type="button"
        ></button>
      </section>

      <section className="cards" aria-label="Карточки мест">
        <Card card={cards} onCardClick={(card) => props.onCardClick(card)} />
      </section>
    </main>
  );
}

export default Main;
