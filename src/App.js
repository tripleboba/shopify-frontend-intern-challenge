import Header from "./components/Header";
import Form from "./components/Form";
import Anwsers from "./components/Anwsers";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {

  return (
      <div className="section">
        <Router>
          <Header />
          <Routes>
            <Route path="/api" element={<Form />} />
            <Route path="/answers" element={<Anwsers />} />
          </Routes>
        </Router>
      </div>
  );
}

