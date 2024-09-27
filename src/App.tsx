import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Input from "./Input";
import AnswerRespond from "./AnswerRespond";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Input />} />
        <Route path="/result" element={<AnswerRespond />} />
      </Routes>
    </Router>
  );
}

export default App;
