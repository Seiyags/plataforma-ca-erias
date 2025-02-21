import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Procedimiento from "./pages/Procedimiento.jsx";
import Visual from "./pages/Visual";
import Descargar from "./pages/Descargar";

function App() {
  return (
    <Router>
      <header className="">
        <h1 className="text-5xl font-bold text-center bg-indigo-300 p-4">Plataforma Cañerias</h1>
        <nav>
          <ul className="flex justify-center space-x-6 bg-indigo-200 p-3">
            <li><Link to="/" className="">Inicio</Link></li>
            <li><Link to="/Procedimiento" className="">Procedimiento</Link></li>
            <li><Link to="/Visual" className="">Visual</Link></li>
            <li><Link to="/Descargar" className="">Descargar</Link></li>
          </ul>
        </nav>
      </header>

      <main className="mt-8 px-4 text-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Procedimiento" element={<Procedimiento />} />
          <Route path="/Visual" element={<Visual />} />
          <Route path="/Descargar" element={<Descargar />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
