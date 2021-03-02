import { useContext, useEffect, useState } from "react";
import { CharacterContext } from "../contexts/CharacterContext";
import CharacterCard from "../components/CharacterCard";

import "../css/CharacterList.css";

function CharacterList() {
  const [sortChoice, setSortChoice] = useState("");
  const { characters } = useContext(CharacterContext);

  useEffect(() => {
    let body = document.querySelector("body");
    body.style.background =
      "url('https://i.pinimg.com/originals/7f/6e/09/7f6e09c8fdde84a31b11a9159ace3ebd.jpg')";
  }, []);

  const handleChange = (e) => {
    console.log(e.target.value);
    setSortChoice(e.target.value);
  };

  // This method takes two arguments, the first one is the list that needs to be sorted. The other argument is a sorting choice basically, in our case "name" or "power".
  const sortBy = (list, sort) => {
    if (sort === "") return list.sort((a, b) => (a.id > b.id ? 1 : -1));
    return list.sort((a, b) => (a[sort] > b[sort] ? 1 : -1));
  };

  // This is my computed property
  const sortedCharacters = sortBy(characters, sortChoice);

  return (
    <div className="character-list">
      <div className="sort-container">
        <span>Sort By:</span>
        <select onChange={handleChange}>
          <option value="">unsorted</option>
          <option value="name">name</option>
          <option value="power">power</option>
        </select>
      </div>
      <div className="character-list-container">
        {characters &&
          sortedCharacters.map((character, i) => (
            <CharacterCard key={i} data={character} />
          ))}
      </div>
    </div>
  );
}

export default CharacterList;
