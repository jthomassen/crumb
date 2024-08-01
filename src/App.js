import "./App.css";
import Home from "./Home";
import Wordle from "./Wordle"
import MeetingSpot from "./MeetingSpot";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wordle" element={<Wordle />} />
          <Route path="/meeting-spot" element={<MeetingSpot />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;