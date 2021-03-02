import { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { CharacterContext } from "../contexts/CharacterContext";

// This activates the css-file, it is by default global
import "../css/Character.css";

function Character(props) {
  const [character, setCharacter] = useState(null);
  const { characters } = useContext(CharacterContext);

  // This effect we set the background image of this component when it is rendering.
  useEffect(() => {
    let body = document.querySelector("body");
    body.style.background =
      "url('https://images.wallpapersden.com/image/download/kame-house-dragon-ball-z_64091_3032x1706.jpg')";
  }, []);

  // We create an useEffect that will go out and get the correct data for us from the characters array. This effect will run on rendering only if the characters array variable is NOT null. Otherwise we will get a huge error since it down in the jsx tries to acces properties that is null. I have also put characters as a second argument to the useEffect, and that is because I want the useEffect to not only run on rendering but also every time the characters array gets updated.
  useEffect(() => {
    if (characters) {
      // We need to acces the dynamic parameter id in some way, react-router-dom gives us a way to do this.It automatically injects an object called "match" on the component's props object, and this match object contains the information of all the params included in the url.
      setCharacter(
        // We use a NOT STRICT equality check here beacuse the params are always strings, and the character.id is a number in our case.
        characters.find((character) => props.match.params.id == character.id)
      );
    }
  }, [characters]);

  // Our render method that runs when the character object (our state variable) is NOT null.
  const renderCharacter = () => {
    return (
      <div className="character">
        <div className="image-container">
          <img src={character.image} alt={character.name} />
        </div>
        <div className="container">
          <span className="name">{character.name}</span>
          <div className="species row">
            <span>Species: {character.species}</span>
          </div>
          <div className="powerLevel row">
            <span>Power: {character.power}</span>
          </div>
          <div className="planet row">
            <span>Home Planet: {character.homePlanet}</span>
          </div>
          <span className="long-desc">{character.longDesc}</span>
        </div>
        <NavLink className="back" to="/characters">
          Back
        </NavLink>
      </div>
    );
  };

  // This is the components return statement. It is a ternary that depends on the character (our state variable) variable. If it is defined, it will invoke a method called renderCharacter which takes care of the jsx creation, otherwies it will just return an empty div. This is because we dont want to try rendering something that is undefined or null.
  return character ? renderCharacter() : <div></div>;
}

export default Character;
