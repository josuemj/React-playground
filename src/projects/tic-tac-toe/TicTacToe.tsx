import { useState } from "react";
import "./TicTacToe.css"; // Assuming you have a CSS file for styling
export function TicTacToe() {
  const [player, setPlayer] = useState("X");
  const [xPositions, setXPosition] = useState<number[]>([]);
  const [oPositions, setOPosition] = useState<number[]>([]);
  const [winner, setWinner] = useState("");

  const play = (player: string, positon: number) => {
    if (xPositions.includes(positon) || oPositions.includes(positon)) {
    } else {
      if (player == "X") {
        const newXPosition = [...xPositions, positon];
        setXPosition(newXPosition);
        if (checkWin(newXPosition)) {
          setWinner("X");
        } else if (newXPosition.length + oPositions.length === 9) {
          setWinner("Draw");
        }
        setPlayer("O");
      } else {
        const newOPosition = [...oPositions, positon];
        setOPosition(newOPosition);
        if (checkWin(newOPosition)) {
          setWinner("O");
        } else if (newOPosition.length + xPositions.length === 9) {
          setWinner("Draw");
        }
        setPlayer("X");
      }
    }
  };

  const checkWin = (positions: number[]): boolean => {
    return wins.some((combo) => combo.every((pos) => positions.includes(pos)));
  };

  const restart = () => {
    setXPosition([]);
    setOPosition([]);
    setWinner("");
    setPlayer("X");
  };

  const wins: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 5, 6],
  ];

  return (
    <>
      <section className="tic-tac-toe">
        <h1>Turn {player}</h1>
        {winner != "" ? <h1>{"Winner! " + winner}</h1> : ""}
        <div className="board-container">
          {Array.from({ length: 9 }, (_, i) => (
            <div
              className="square"
              key={i}
              onClick={() => {
                play(player, i);
              }}
              style={
                winner != ""
                  ? { pointerEvents: "none" }
                  : xPositions.includes(i)
                  ? { backgroundColor: "rgb(0, 193, 180)" }
                  : oPositions.includes(i)
                  ? { backgroundColor: "rgb(44, 242, 0)" }
                  : { backgroundColor: "rgb(229, 248, 255)" }
              }
            >
              {xPositions.includes(i) ? (
                <p>X</p>
              ) : oPositions.includes(i) ? (
                <p>O</p>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
        {winner != "" ? <button onClick={restart}>Play again</button> : ""}
      </section>
    </>
  );
}
