import { useContext, useEffect, useState } from "react";
import { CharacterContext } from "../contexts/CharacterContext";

function Character(props) {
  const [character, setCharacter] = useState(null);
  const { characters } = useContext(CharacterContext);

  useEffect(() => {
    setCharacter(
      characters.find(
        (character) => parseInt(props.match.params.id) === character.id
      )
    );
  }, []);

  const renderCharacter = () => {
    return <div className="character">{character.name}</div>;
  };

  return character ? renderCharacter() : <div className="character"></div>;
}
export default Character;
