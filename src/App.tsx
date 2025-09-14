import "./App.css";
import Home from "./projects/home/Home";
import { CatFacts } from "./projects/catfacts/CatFacts";
import { Counter } from "./projects/counter/Counter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Timer } from "./projects/timer/Timer";
import { Sandbox } from "./projects/design-space/Sandbox";
import { TicTacToe } from "./projects/tic-tac-toe/TicTacToe";
import Gaming from "./projects/gaming/Gaming";

function App() {
  const routes = {
    "/": Home,
    "/counter": Counter,
    "/catfacts": CatFacts,
    "/tic-tac-toe": TicTacToe,
    "/timer": Timer,
    "/sandbox": Sandbox,
    "/gaming": Gaming,
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          {Object.entries(routes).map(([route, Page]) => (
            <Route key={route} path={route} element={<Page />} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
