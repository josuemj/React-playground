import "./Gaming.css";
import { useEffect, useState } from "react";

export function Gaming() {
  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0 });
  const playerSpeed = 5;
  const movePlayer = (direction: string) => {
    console.log("direction", direction.toLowerCase());
    switch (direction.toLowerCase()) {
      case "w":
        console.log("moving up");
        setPlayerPosition((prev) => ({ x: prev.x, y: prev.y - playerSpeed }));
        break;
      case "s":
        console.log("moving down");
        setPlayerPosition((prev) => ({ x: prev.x, y: prev.y + playerSpeed }));
        break;
      case "a":
        console.log("moving left");
        setPlayerPosition((prev) => ({ x: prev.x - playerSpeed, y: prev.y }));
        break;
      case "d":
        console.log("moving right");
        setPlayerPosition((prev) => ({ x: prev.x + playerSpeed, y: prev.y }));
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      movePlayer(e.key);
    });
  }, []);

  return (
    <div className="gaming-container">
      <div
        id="player"
        style={{ left: playerPosition.x, top: playerPosition.y }}
      ></div>
    </div>
  );
}
