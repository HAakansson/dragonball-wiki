import { useHistory } from "react-router-dom";

import freiza100Image from "../assets/freiza-final-form-100.png";
import "../css/CharacterCard.css";

function Character(props) {
  const history = useHistory();

  // This is a special case, could not find a square picture, had to save an image down and resize it and save it in assets.
  if (props.data.image === "freiza") {
    props.data.image = freiza100Image;
  }

  const handleClick = () => {
    history.push(`/characters/${props.data.id}`)
  }

  return (
    <div className="character-card" onClick={handleClick}>
      <img src={props.data.image} alt={props.data.name} />
      <div className="container">
        <span className="name">{props.data.name}</span>
        <div className="power-level row">
          <span>Powerlevel:</span>
          <span>{props.data.powerLevel}</span>
        </div>
        <div className=" species row">
          <span>Species:</span>
          <span>{props.data.species}</span>
        </div>
      </div>
    </div>
  );
}

export default Character;
