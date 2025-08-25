import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import ExplainCode from "./pages/ExplainCode/ExplainCode.jsx";
import BugFixer from "./pages/BugFixer/BugFixer.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explain" element={<ExplainCode />} />
        <Route path="/bugfixer" element={<BugFixer />} />
      </Routes>
    </Router>
  );
}
