import React from "react";
import api from "../utils/api";
import Card from "./Card";
import { CurentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  // -- Подписываемся на контекст
  const currentUser = React.useContext(CurentUserContext);

  // -- Состояние карточек
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    // -- Запрос данных с сервера
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([user, cards]) => {
        setCards(cards);
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

  return (
    <main className="main">
      <section className="profile" aria-label="Профиль пользователя">
        <div className="profile__avatar-box">
          <img
            className="profile__avatar"
            src={currentUser.avatar}
            alt="Аватар пользователя"
          />
          <button
            onClick={props.onEditAvatar}
            className="profile__button profile__button_type_avatar button"
            type="button"
          ></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button
            onClick={props.onEditProfile}
            className="profile__button profile__button_type_edit button"
            type="button"
          ></button>
          <p className="profile__job">{currentUser.about}</p>
        </div>
        <button
          onClick={props.onAddPlace}
          className="profile__button profile__button_type_add button"
          type="button"
        ></button>
      </section>

      <section className="cards" aria-label="Карточки мест">
        <ul className="cards__list">
          {cards.map((cardItem) => (
            <li key={cardItem._id}>
              <Card
                card={cardItem}
                onCardClick={(card) => props.onCardClick(card)}
                onCardLike={(card) => handleCardLike(card)}
                onCardDelete={(card) => handleCardDelete(card)}
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
