function Card(props) {
  return (
    <ul className="cards__list">
      {props.card.map((card) => (
        <li key={card._id}>
          <figure className="card">
            <img
              className="card__photo"
              src={card.link}
              alt={`На фотографии: ${card.name}`}
            />
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
  );
}

export default Card;
