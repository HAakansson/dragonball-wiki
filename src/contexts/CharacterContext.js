import { createContext, useState, useEffect } from "react";

export const CharacterContext = createContext();

function CharacterProvider(props) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    setCharacters(require("../json/characters.json"));
  }, []);

  const values = {
    characters,
  };

  return (
    <CharacterContext.Provider value={values}>
      {props.children}
    </CharacterContext.Provider>
  );
}

export default CharacterProvider;
