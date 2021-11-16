# Практическая работа №10: Место

- Описание
- Особенности

---

**Описание**

Практическая работа №10 курса "Веб-разработчик" Яндекс.Практикума — портирование проекта **"Место"** на платформу **React**.

---

**Особенности**

Освоили CRA: развёртывание нашего проекта на основе шаблона React. В этой работе мы познакомились с новым синтаксисом JSX, применили функциональные компоненты и хуки.

Теперь проект практически полностью написан в JS — разметка html перекочевала в JS-компоненты с определёнными пропсами:

```javascript
<>
  <Header />
  <Main
    onEditAvatar={() => handleEditAvatarClick()}
    onEditProfile={() => handleEditProfileClick()}
    onAddPlace={() => handleAddPlaceClick()}
    onCardClick={(card) => handleCardClick(card)}
  />
  <Footer />
  <PopupWithForm isOpen={isEditAvatarPopupOpen} />
  <ImagePopup card={selectedCard} onClose={() => closeAllPopups()} />
</>
```

В самих компонентах добавились переменные состояния и "эффекты", меняющие эти переменные:

```javascript
function Main(props) {
  // -- Переменные состояния профиля
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
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
```

Передаваемые в компонент "пропсы" теперь удобно вставлять в разметку в качестве переменных и методов:

```javascript
function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_type_card ${card && "popup_opened"}`}>
      <figure className="popup__card">
        <img
          className="popup__card-image"
          src={card ? card.link : ""}
          alt={card ? `На фотографии: ${card.name}` : ""}
        />
        ...
```

---
