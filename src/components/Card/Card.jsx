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
  const limitString = (string) => {
    if (string.length > 150) {
      return { string: string.slice(0, 147).concat("..."), addButton: true };
    }
    return { string, addButton: false };
  };
  return (
    <div className="card">
      <div className="close">X</div>
      <h3>{title}</h3>
      <h6>{createdAt}</h6>
      <h5>{userName}</h5>
      <button type="button">{status}</button>
      <button type="button">{importance}</button>
      <p>{limitString(description).string}</p>
    </div>
  );
};

export default Card;
