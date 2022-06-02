import { useState } from "react";
const Card = ({
  data: {
    title,
    createdAt,
    user: { userName },
    description,
    status,
    importance,
  },
}) => {
  const [showMore, setShowMore] = useState(false);
  const dateTime = new Date(createdAt).toLocaleString() + " hs.";

  const limitString = (string) => {
    if (string.length > 170) {
      return { string: string.slice(0, 167).concat("..."), addButton: true };
    }
    return { string, addButton: false };
  };

  return (
    <div className="card">
      <div className="close">X</div>
      <h3>{title}</h3>
      <h6>{dateTime}</h6>
      <h5>{userName}</h5>
      <button className={status.toLowerCase()} type="button">
        {status}
      </button>
      <button className={importance.toLowerCase()} type="button">
        {importance}
      </button>
      {!showMore && <p>{limitString(description).string}</p>}
      {showMore && (
        <>
          <p>{description}</p>
          <button type="button" onClick={() => setShowMore(false)}>
            Ver menos
          </button>
        </>
      )}
      {!showMore && limitString(description).addButton && (
        <button type="button" onClick={() => setShowMore(true)}>
          Ver más
        </button>
      )}
    </div>
  );
};

export default Card;
