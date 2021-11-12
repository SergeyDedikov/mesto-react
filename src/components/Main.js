function Main() {
  
  function handleEditAvatarClick() {
    document
      .querySelector(".popup_type_edit-avatar")
      .classList.add("popup_opened");
  }

  function handleEditProfileClick() {
    document
      .querySelector(".popup_type_edit-profile")
      .classList.add("popup_opened");
  }

  function handleAddPlaceClick() {
    document
      .querySelector(".popup_type_add-place")
      .classList.add("popup_opened");
  }

  return (
    <main className="main">
      <section className="profile" aria-label="Профиль пользователя">
        <div className="profile__avatar-box">
          <img
            className="profile__avatar"
            src="src"
            alt="Аватар пользователя"
          />
          <button
            onClick={() => handleEditAvatarClick()}
            className="profile__button profile__button_type_avatar button"
            type="button"
          ></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <button
            onClick={() => handleEditProfileClick()}
            className="profile__button profile__button_type_edit button"
            type="button"
          ></button>
          <p className="profile__job">Исследователь океана</p>
        </div>
        <button
          onClick={() => handleAddPlaceClick()}
          className="profile__button profile__button_type_add button"
          type="button"
        ></button>
      </section>

      <section className="cards" aria-label="Карточки мест">
        <ul className="cards__list"></ul>
      </section>
    </main>
  );
}

export default Main;
