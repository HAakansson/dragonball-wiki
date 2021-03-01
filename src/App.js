import { BrowserRouter, Route } from "react-router-dom";
import CharacterProvider from "./contexts/CharacterContext";

import Home from "./pages/Home";
import CharacterList from "./pages/CharacterList";
import Navbar from "./components/Navbar";
import Character from "./components/Character";

function App() {
  return (
    <div className="app">
      <CharacterProvider>
        <BrowserRouter>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/characters" component={CharacterList} />
          <Route exact path="/characters/:id" component={Character} />
        </BrowserRouter>
      </CharacterProvider>
    </div>
  );
}

export default App;
