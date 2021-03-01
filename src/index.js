import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import CharacterProvider from "./contexts/CharacterContext";

import App from "./App";
import Home from "./pages/Home";
import CharacterList from "./pages/CharacterList";

import "./css/index.css";

ReactDOM.render(
  <CharacterProvider>
    <BrowserRouter>
      <App>
        <Route exact path="/" component={Home} />
        <Route exact path="/characters" component={CharacterList} />
      </App>
    </BrowserRouter>
  </CharacterProvider>,
  document.querySelector("#root")
);
