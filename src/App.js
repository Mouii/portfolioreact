import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import "./i18n";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;