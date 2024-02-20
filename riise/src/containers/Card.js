import "./Card.css";

const Card = ({ title, body, image, alt }) => {
  return (
    <div className="card">
      <div className="card-img-container">
        <img src={image} alt={alt} width="100%" />
      </div>
      <h5 className="card-title">{title}</h5>
      <p>{body}</p>
    </div>
  );
};

export default Card;
