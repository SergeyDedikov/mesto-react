import React from "react";
import api from "../utils/api";

function Main(props) {
  // --  Переменные состояния профиля
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();

  React.useEffect(() => {
    // -- Запрос данных с сервера
    api
      .getUserInfo()
      .then((userData) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // -- Состояние карточек
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((cardsData) => {
        setCards(cardsData);
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
        <ul className="cards__list">
          {cards.map((card, i) => (
            <li key={card._id}>
              <figure className="card">
                <img className="card__photo" src={card.link} />
                <figcaption className="card__info">
                  <h2 className="card__description">{card.name}</h2>
                  <div className="card__likes-box">
                    <button
                      className="card__button-like button"
                      type="button"
                    ></button>
                    <p className="card__likes-count">{card.likes.length}</p>
                  </div>
                  <button
                    className="card__button-remove button"
                    type="button"
                  ></button>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
