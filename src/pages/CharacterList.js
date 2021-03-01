import { useContext, useEffect } from "react";
import { CharacterContext } from "../contexts/CharacterContext";
import CharacterCard from "../components/CharacterCard";

import "../css/CharacterList.css";

function CharacterList() {
  const { characters } = useContext(CharacterContext);

  useEffect(() => {
    let body = document.querySelector("body");
    body.style.background =
      "url('https://i.pinimg.com/originals/7f/6e/09/7f6e09c8fdde84a31b11a9159ace3ebd.jpg')";
  }, []);

  return (
    <div className="character-list">
      {characters &&
        characters.map((character, i) => (
          <CharacterCard key={i} data={character} />
        ))}
    </div>
  );
}

export default CharacterList;
