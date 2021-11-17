function Card({card, onCardClick}) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <figure className="card">
      <img
        className="card__photo"
        src={card.link}
        alt={`На фотографии: ${card.name}`}
        onClick={handleClick}
      />
      <figcaption className="card__info">
        <h2 className="card__description">{card.name}</h2>
        <div className="card__likes-box">
          <button className="card__button-like button" type="button"></button>
          <p className="card__likes-count">{card.likes.length}</p>
        </div>
        <button className="card__button-remove button" type="button"></button>
      </figcaption>
    </figure>
  );
}

export default Card;
