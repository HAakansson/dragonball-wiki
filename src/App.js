import Navbar from "./components/Navbar";

function App(props) {
  return (
    <div className="app">
      <Navbar />
      {props.children}
    </div>
  );
}

export default App;
