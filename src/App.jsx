import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navigation from "./components/Navigation";

import Home from "./routes/home";
import About from "./routes/about";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
