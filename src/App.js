import logo from "./images/logo-mesto.svg";
import "./index.css";

function App() {
  return (
    <>
      <header className="header">
        <img className="header__logo" src={logo} alt="Логотип Место.Россия" />
      </header>

      <main className="main">
        <section className="profile" aria-label="Профиль пользователя">
          <div className="profile__avatar-box">
            <img
              className="profile__avatar"
              src="src"
              alt="Аватар пользователя"
            />
            <button
              className="profile__button profile__button_type_avatar button"
              type="button"
            ></button>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button
              className="profile__button profile__button_type_edit button"
              type="button"
            ></button>
            <p className="profile__job">Исследователь океана</p>
          </div>
          <button
            className="profile__button profile__button_type_add button"
            type="button"
          ></button>
        </section>

        <section className="cards" aria-label="Карточки мест">
          <ul className="cards__list"></ul>
        </section>
      </main>

      <footer className="footer">
        <p className="footer__copyright" lang="en">
          &copy; 2021 Mesto Russia & Sergey Dedikov
        </p>
      </footer>

      <div className="popup popup_type_edit-profile">
        <div className="popup__container popup__container_type_edit-profile">
          <form
            name="editProfile"
            className="popup__form popup__form_edit-profile"
            novalidate
          >
            <h3 className="popup__heading">Редактировать профиль</h3>
            <fieldset className="popup__input-container">
              <label className="popup__field">
                <input
                  id="name"
                  className="popup__input popup__input_value_name"
                  type="text"
                  name="name"
                  required
                  minlength="2"
                  maxlength="40"
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
                  minlength="2"
                  maxlength="200"
                />
                <span id="job-error" className="popup__error"></span>
              </label>
            </fieldset>
            <button
              className="popup__button popup__button_save button"
              type="submit"
            >
              Сохранить
            </button>
            <button
              className="popup__close popup__close_edit-profile button"
              type="button"
            ></button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_add-place">
        <div className="popup__container popup__container_type_add-place">
          <form
            name="addPlace"
            className="popup__form popup__form_add-place"
            novalidate
          >
            <h3 className="popup__heading">Новое место</h3>
            <fieldset className="popup__input-container">
              <label className="popup__field">
                <input
                  id="place"
                  className="popup__input popup__input_value_place"
                  type="text"
                  name="place"
                  placeholder="Название"
                  required
                  minlength="2"
                  maxlength="30"
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
            <button
              className="popup__button popup__button_create button"
              type="submit"
            >
              Создать
            </button>
            <button
              className="popup__close popup__close_add-place button"
              type="button"
            ></button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_edit-avatar">
        <div className="popup__container popup__container_type_edit-avatar">
          <form
            name="editAvatar"
            className="popup__form popup__form_edit-avatar"
            novalidate
          >
            <h3 className="popup__heading">Обновить аватар</h3>
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
            <button className="popup__button button" type="submit">
              Сохранить
            </button>
            <button
              className="popup__close popup__close_edit-avatar button"
              type="button"
            ></button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_confirmation">
        <div className="popup__container popup__container_type_confirmation">
          <form
            name="confirmCardRemove"
            className="popup__form popup__form_confirmation"
            novalidate
          >
            <h3 className="popup__heading">Вы уверены?</h3>
            <button
              className="popup__button popup__button_confirm button"
              type="submit"
            >
              Да
            </button>
            <button
              className="popup__close popup__close_confirmation button"
              type="button"
            ></button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_card">
        <figure className="popup__card">
          <img className="popup__card-image" />
          <figcaption className="popup__card-info">
            <p className="popup__card-description"></p>
            <button
              className="popup__close popup__close_card button"
              type="button"
            ></button>
          </figcaption>
        </figure>
      </div>

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
