import { useContext, useEffect, useState } from "react";
import { CharacterContext } from "../contexts/CharacterContext";
import CharacterCard from "../components/CharacterCard";

import "../css/CharacterList.css";

function CharacterList() {
  const [sortChoice, setSortChoice] = useState({
    property: "name",
    reverse: false,
  });
  const [options, setOptions] = useState([
    "name",
    "power",
    "name/r",
    "power/r",
  ]);
  const { characters } = useContext(CharacterContext);

  useEffect(() => {
    let body = document.querySelector("body");
    body.style.background =
      "url('https://i.pinimg.com/originals/7f/6e/09/7f6e09c8fdde84a31b11a9159ace3ebd.jpg')";
  }, []);

  const handleChange = (e) => {
    if (e.target.value.includes("/r")) {
      setSortChoice({
        property: e.target.value.replace("/r", ""),
        reverse: true,
      });
    } else {
      setSortChoice({ property: e.target.value, reverse: false });
    }
  };

  const sortBy = (list, sort) => {
    return sort.reverse
      ? list.sort((a, b) => (a[sort.property] > b[sort.property] ? -1 : 1))
      : list.sort((a, b) => (a[sort.property] > b[sort.property] ? 1 : -1));
  };

  // Computed Property
  const sortedCharacters = sortBy(characters, sortChoice);

  return (
    <div>
      <div className="sort-container">
        <select onChange={handleChange}>
          {options.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="character-list">
        {characters &&
          sortedCharacters.map((character, i) => (
            <CharacterCard key={i} data={character} />
          ))}
      </div>
    </div>
  );
}

export default CharacterList;
