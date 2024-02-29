import "./Card.css";

const Card = ({ title, body, image, alt, hover = true }) => {
  return (
    <div className={`card ${hover ? "card-hover" : ""}`}>
      <div
        className="card-img-container"
        style={{ backgroundImage: `url('${image}')` }}
      >
        {/* <img src={image} alt={alt} width="100%" /> */}
      </div>
      <div className="card-title">{title}</div>
      <p>{body}</p>
    </div>
  );
};

export default Card;
