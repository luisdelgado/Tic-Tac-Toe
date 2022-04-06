import React, { useState } from "react";
import "./App.css";

function App() {
  const [dataBase, setDataBase] = useState([
    ["0", "0", "0"],
    ["0", "0", "0"],
    ["0", "0", "0"],
  ]);
  const [gameState, setGameState] = useState(false);
  const [endGame, setEndGame] = useState("");

  function verifyGameStatus(newDataBase) {
    console.log(
      newDataBase,
      newDataBase[0][0],
      newDataBase[0][1],
      newDataBase[0][2],
      (newDataBase[0][0].valueOf() === newDataBase[0][1]).valueOf() ===
        newDataBase[0][2].valueOf()
    );
    if (newDataBase[0][0].valueOf() !== "0") {
      if (
        (newDataBase[0][0].valueOf() === newDataBase[0][1].valueOf()) ===
        newDataBase[0][2].valueOf()
      ) {
        setEndGame(!gameState ? "P2 wins!" : "P1 wins!");
        console.log("end game");
        return true;
      }
    }
    return false;
  }

  function gameClick(positionY, positionX) {
    const newDataBase = [...dataBase];
    newDataBase[positionY][positionX] = !gameState ? "X" : "O";
    setDataBase(newDataBase);
    if (!verifyGameStatus(newDataBase)) setGameState(!gameState);
  }

  function restart() {
    setDataBase([
      ["0", "0", "0"],
      ["0", "0", "0"],
      ["0", "0", "0"],
    ]);
    setGameState(false);
    setEndGame("");
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header__buttons">
          <button
            className="buttons__button button--zero--zero"
            onClick={() => {
              gameClick(0, 0);
            }}
          >
            {dataBase[0][0] === "0" ? dataBase[0][0] : ""}
          </button>
          <button
            className="buttons__button button--zero--one"
            onClick={() => {
              gameClick(0, 1);
            }}
          >
            {dataBase[0][1] !== "0" ? dataBase[0][1] : ""}
          </button>
          <button
            className="buttons__button button--zero--two"
            onClick={() => {
              gameClick(0, 2);
            }}
          >
            {dataBase[0][2] !== "0" ? dataBase[0][2] : ""}
          </button>
        </div>
        <div className="App-header__buttons">
          <button
            className="buttons__button button--one--zero"
            onClick={() => {
              gameClick(1, 0);
            }}
          >
            {dataBase[1][0] !== "0" ? dataBase[1][0] : ""}
          </button>
          <button
            className="buttons__button button--one--one"
            onClick={() => {
              gameClick(1, 1);
            }}
          >
            {dataBase[1][1] !== "0" ? dataBase[1][1] : ""}
          </button>
          <button
            className="buttons__button button--one--two"
            onClick={() => {
              gameClick(1, 2);
            }}
          >
            {dataBase[1][2] !== "0" ? dataBase[1][2] : ""}
          </button>
        </div>
        <div className="App-header__buttons">
          <button
            className="buttons__button button--two--zero"
            onClick={() => {
              gameClick(2, 0);
            }}
          >
            {dataBase[2][0] !== "0" ? dataBase[2][0] : ""}
          </button>
          <button
            className="buttons__button button--two--one"
            onClick={() => {
              gameClick(2, 1);
            }}
          >
            {dataBase[2][1] !== "0" ? dataBase[2][1] : ""}
          </button>
          <button
            className="buttons__button button--two--two"
            onClick={() => {
              gameClick(2, 2);
            }}
          >
            {dataBase[2][2] !== "0" ? dataBase[2][2] : ""}
          </button>
        </div>
        {endGame !== "" && (
          <button
            onClick={() => {
              restart();
            }}
          >
            Recomeçar
          </button>
        )}
      </header>
    </div>
  );
}

export default App;
