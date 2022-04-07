import React, { useState } from "react";
import "./App.css";

function App() {
  const [dataBase, setDataBase] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [gameState, setGameState] = useState(false);
  const [endGame, setEndGame] = useState("");

  function verifyGameStatus(newDataBase) {
    if (newDataBase[0][0] !== 0) {
      // XXX
      if (
        newDataBase[0][0] === newDataBase[0][1] &&
        newDataBase[0][0] === newDataBase[0][2]
      ) {
        setEndGame(gameState ? "P2 wins!" : "P1 wins!");
        return;
      }

      // X
      // X
      // X
      if (
        newDataBase[0][0] === newDataBase[1][0] &&
        newDataBase[0][0] === newDataBase[2][0]
      ) {
        setEndGame(gameState ? "P2 wins!" : "P1 wins!");
        return;
      }

      // X
      //  X
      //   X
      if (
        newDataBase[0][0] === newDataBase[1][1] &&
        newDataBase[0][0] === newDataBase[2][2]
      ) {
        setEndGame(gameState ? "P2 wins!" : "P1 wins!");
        return;
      }
    }

    if (newDataBase[1][0] !== 0) {
      // OOO
      // XXX
      if (
        newDataBase[1][0] === newDataBase[1][1] &&
        newDataBase[1][0] === newDataBase[1][2]
      ) {
        setEndGame(gameState ? "P2 wins!" : "P1 wins!");
        return;
      }
    }

    if (newDataBase[2][0] !== 0) {
      // OOO
      // OOO
      // XXX
      if (
        newDataBase[2][0] === newDataBase[2][1] &&
        newDataBase[2][0] === newDataBase[2][2]
      ) {
        setEndGame(gameState ? "P2 wins!" : "P1 wins!");
        return;
      }
    }

    // OXO
    // OXO
    // OXO
    if (newDataBase[0][1] !== 0) {
      if (
        newDataBase[0][1] === newDataBase[1][1] &&
        newDataBase[0][1] === newDataBase[2][1]
      ) {
        setEndGame(gameState ? "P2 wins!" : "P1 wins!");
        return;
      }
    }

    if (newDataBase[0][2] !== 0) {
      // OOX
      // OOX
      // OOX
      if (
        newDataBase[0][2] === newDataBase[1][2] &&
        newDataBase[0][2] === newDataBase[2][2]
      ) {
        setEndGame(gameState ? "P2 wins!" : "P1 wins!");
        return;
      }

      //   X
      //  X
      // X
      if (
        newDataBase[0][2] === newDataBase[1][1] &&
        newDataBase[0][2] === newDataBase[2][0]
      ) {
        setEndGame(gameState ? "P2 wins!" : "P1 wins!");
        return;
      }
    }

    // verify draw
    const initialValue = 0;
    var sumWithInitial = 0;
    sumWithInitial = newDataBase[0].reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
    sumWithInitial =
      newDataBase[1].reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
      ) + sumWithInitial;
    sumWithInitial =
      newDataBase[2].reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
      ) + sumWithInitial;
    if (sumWithInitial === 13) setEndGame("Draw!");

    setGameState(!gameState);
  }

  function gameClick(positionY, positionX) {
    const newDataBase = [...dataBase];

    // 1 = X , 2 = O
    newDataBase[positionY][positionX] = !gameState ? 1 : 2;
    setDataBase(newDataBase);
    verifyGameStatus(newDataBase);
  }

  function restart() {
    setDataBase([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
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
            {/* Verify at database if show "", X or O */}
            {dataBase[0][0] === 0 ? "" : dataBase[0][0] === 1 ? "X" : "O"}
          </button>
          <button
            className="buttons__button button--zero--one"
            onClick={() => {
              gameClick(0, 1);
            }}
          >
            {dataBase[0][1] === 0 ? "" : dataBase[0][1] === 1 ? "X" : "O"}
          </button>
          <button
            className="buttons__button button--zero--two"
            onClick={() => {
              gameClick(0, 2);
            }}
          >
            {dataBase[0][2] === 0 ? "" : dataBase[0][2] === 1 ? "X" : "O"}
          </button>
        </div>
        <div className="App-header__buttons">
          <button
            className="buttons__button button--one--zero"
            onClick={() => {
              gameClick(1, 0);
            }}
          >
            {dataBase[1][0] === 0 ? "" : dataBase[1][0] === 1 ? "X" : "O"}
          </button>
          <button
            className="buttons__button button--one--one"
            onClick={() => {
              gameClick(1, 1);
            }}
          >
            {dataBase[1][1] === 0 ? "" : dataBase[1][1] === 1 ? "X" : "O"}
          </button>
          <button
            className="buttons__button button--one--two"
            onClick={() => {
              gameClick(1, 2);
            }}
          >
            {dataBase[1][2] === 0 ? "" : dataBase[1][2] === 1 ? "X" : "O"}
          </button>
        </div>
        <div className="App-header__buttons">
          <button
            className="buttons__button button--two--zero"
            onClick={() => {
              gameClick(2, 0);
            }}
          >
            {dataBase[2][0] === 0 ? "" : dataBase[2][0] === 1 ? "X" : "O"}
          </button>
          <button
            className="buttons__button button--two--one"
            onClick={() => {
              gameClick(2, 1);
            }}
          >
            {dataBase[2][1] === 0 ? "" : dataBase[2][1] === 1 ? "X" : "O"}
          </button>
          <button
            className="buttons__button button--two--two"
            onClick={() => {
              gameClick(2, 2);
            }}
          >
            {dataBase[2][2] === 0 ? "" : dataBase[2][2] === 1 ? "X" : "O"}
          </button>
        </div>
        {endGame !== "" && (
          <>
            <p>{endGame}</p>
            <button
              onClick={() => {
                restart();
              }}
            >
              Restart
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
