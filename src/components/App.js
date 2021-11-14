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

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
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
        name={"edit-avatar"}
        title={"Обновить аватар"}
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
        name={"edit-profile"}
        title={"Редактировать профиль"}
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
        name={"add-place"}
        title={"Новое место"}
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

      <div className="popup popup_type_edit-profile">
        <div className="popup__container popup__container_type_edit-profile">
          <form
            name="edit-profile"
            className="popup__form popup__form_edit-profile"
            noValidate
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
            name="add-place"
            className="popup__form popup__form_add-place"
            noValidate
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
            name="edit-avatar"
            className="popup__form popup__form_edit-avatar"
            noValidate
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
            name="confirmation"
            className="popup__form popup__form_confirmation"
            noValidate
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
