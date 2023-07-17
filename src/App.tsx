import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./routes/home";
import BookShelf from "./routes/bookshelf";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bookshelf" element={<BookShelf />} />
    </Routes>
  );
}

export default App;
