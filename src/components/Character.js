import { useContext, useEffect, useState } from "react";
import { CharacterContext } from "../contexts/CharacterContext";

import freiza100Image from "../assets/freiza-final-form-100.png";
import "../css/Character.css";
import { NavLink } from "react-router-dom";

function Character(props) {
  const [character, setCharacter] = useState(null);
  const [freizaImage, setFreizaImage] = useState(null);
  const { characters } = useContext(CharacterContext);

  useEffect(() => {
    let body = document.querySelector("body");
    body.style.background =
      "url('https://images.wallpapersden.com/image/download/kame-house-dragon-ball-z_64091_3032x1706.jpg')";
  }, []);

  useEffect(() => {
    if (characters) {
      setCharacter(
        characters.find(
          (character) => parseInt(props.match.params.id) === character.id
        )
      );
    }
  }, [characters]);

  useEffect(() => {
    if (character) {
      if (character.image === "freiza") {
        setFreizaImage(freiza100Image);
      }
    }
  }, [character]);

  const renderCharacter = () => {
    return (
      <div className="character">
        <div className="image-container">
          <img
            src={freizaImage ? freizaImage : character.image}
            alt={character.name}
          />
        </div>
        <div className="container">
          <span className="name">{character.name}</span>
          <div className="species row">
            <span>Species: {character.species}</span>
          </div>
          <div className="powerLevel row">
            <span>Power Level: {character.power}</span>
          </div>
          <div className="planet row">
            <span>
              Home Planet:{" "}
              <a target="_blank" href={character.homePlanetUrl}>
                {character.homePlanet}
              </a>
            </span>
          </div>
          <span className="long-desc">¨{character.longDesc}</span>
        </div>
        <NavLink className="back" to="/characters">
          Back
        </NavLink>
      </div>
    );
  };

  return character ? renderCharacter() : <div className="character"></div>;
}
export default Character;
