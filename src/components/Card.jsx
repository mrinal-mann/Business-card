import './Card.css';

const Card = ({ name, description, socialMedia, interests }) => {
  return (
    <div className="card">
      <h1>{name}</h1>
      <p>{description}</p>
      <h2>Interests</h2>
      <ul>
        {interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
      <div className="buttons">
        {socialMedia.linkedin && (
          <button onClick={() => window.open(socialMedia.linkedin, '_blank')}>LinkedIn</button>
        )}
        {socialMedia.twitter && (
          <button onClick={() => window.open(socialMedia.twitter, '_blank')}>Twitter</button>
        )}
        {socialMedia.other && (
          <button onClick={() => window.open(socialMedia.other, '_blank')}>Other</button>
        )}
      </div>
    </div>
  );
};

export default Card;
