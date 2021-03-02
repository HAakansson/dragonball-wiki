import { BrowserRouter, Route } from "react-router-dom";
import CharacterProvider from "./contexts/CharacterContext";

import Home from "./pages/Home";
import CharacterList from "./pages/CharacterList";
import Navbar from "./components/Navbar";
import Character from "./pages/Character";

function App() {
  return (
    <div className="app">
      <CharacterProvider>
        <BrowserRouter>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/characters" component={CharacterList} />
          {/* This route here gives uis a dynamic parameter that we call id, react will now expect this id parameter every time we tre to acces ths route */}
          <Route exact path="/characters/:id" component={Character} />
        </BrowserRouter>
      </CharacterProvider>
    </div>
  );
}

export default App;
