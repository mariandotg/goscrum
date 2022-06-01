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
  return (
    <div className="card">
      <div className="close">X</div>
      <h3>{title}</h3>
      <h6>{createdAt}</h6>
      <h5>{userName}</h5>
      <button type="button">{status}</button>
      <button type="button">{importance}</button>
      <p>{description}</p>
    </div>
  );
};

export default Card;
