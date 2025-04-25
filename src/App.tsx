import "./App.css";
import Home from "./projects/home/Home";
import { CatFacts } from "./projects/catfacts/CatFacts";
import { Counter } from "./projects/counter/Counter";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const routes = {
    "/": Home,
    "/counter": Counter,
    "/catfacts": CatFacts,
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
