import React, { useEffect, useState } from "react";
import "./App.css";
import { winner3X3, winner4X4, winner5X5 } from "./winning";
import { AiOutlineReload } from "react-icons/ai";

const App = () => {
  const [boardSize, setBoardSize] = useState(3);

  useEffect(() => {
    setBoard(Array(boardSize * boardSize).fill("empty"));
    setWinner("");
  }, [boardSize]);
  const [board, setBoard] = useState(Array(3).fill("empty"));
  const [winner, setWinner] = useState("");
  const [xActive, setXActive] = useState(true);

  const handleChange = (idx) => {
    if (board[idx] !== "empty" || winner !== "") return;
    board[idx] = xActive ? "X" : "O";
    setBoard(board);
    setXActive(!xActive);
    console.log(winner3X3(board));
    boardSize === 3 && setWinner(winner3X3(board));
    boardSize === 4 && setWinner(winner4X4(board));
    boardSize === 5 && setWinner(winner5X5(board));
  };

  const boardSizeClass = () => {
    if (boardSize === 4) return "grid4X4";
    else if (boardSize === 5) return "grid5X5";
    else return "grid3X3";
  };

  const reloadGame = () => {
    setBoard(Array(boardSize * boardSize).fill("empty"));
    setWinner("");
    setXActive(true);
  };

  return (
    <div className="appHome">
      <div className="boardSizeButtons">
        <div
          className={`sizeButton ${boardSize === 3 && "sizeButtonActive"}`}
          onClick={() => setBoardSize(3)}
        >
          <span>3X3</span>
        </div>
        <div
          className={`sizeButton ${boardSize === 4 && "sizeButtonActive"}`}
          onClick={() => setBoardSize(4)}
        >
          <span>4X4</span>
        </div>
        <div
          className={`sizeButton ${boardSize === 5 && "sizeButtonActive"}`}
          onClick={() => setBoardSize(5)}
        >
          <span>5X5</span>
        </div>{" "}
        {winner !== "" && (
          <div className="sizeButton reloadButton" onClick={reloadGame}>
            Reload <AiOutlineReload />
          </div>
        )}
      </div>
      {winner && <span className="message">{winner}</span>}
      {!winner && (
        <span className="message">{xActive ? "X turn" : "O turn"}</span>
      )}
      <div className={`gridContainer ${boardSizeClass()}`}>
        {board.map((value, idx) => (
          <div className="gridBox" onClick={() => handleChange(idx)}>
            <span> {value === "empty" ? "" : value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
