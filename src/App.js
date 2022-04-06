import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header__buttons">
          <button className="buttons__button button--zero--zero"></button>
          <button className="buttons__button button--zero--one"></button>
          <button className="buttons__button button--zero--two"></button>
        </div>
        <div className="App-header__buttons">
          <button className="buttons__button button--one--zero"></button>
          <button className="buttons__button button--one--one"></button>
          <button className="buttons__button button--one--two"></button>
        </div>
      </header>
    </div>
  );
}

export default App;
