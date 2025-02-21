import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Procedimiento from "./pages/Procedimiento.jsx";
import Visual from "./pages/Visual";
import Descargar from "./pages/Descargar";
import logo from "./assets/logonuevo.png";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsCopy } from "react-icons/bs";
import Banner from './components/Banner';
const copiar = (event) => {
  const id = event.currentTarget.id;
  navigator.clipboard.writeText(id).catch((err) => {
    console.error("Error al copiar el texto: ", err);
  });
};

function App() {
  return (
    <Router>
      <header className="flex items-center bg-gray-100 p-3 h-20 border-b-gray-300 border-b-1">
        <img src={logo} className="h-full" alt="Logo" />
        <div className="flex items-center flex-1 justify-between">
          <h1 className="text-2xl font-bold font p-3 text-gray-800">
            Plataforma Cañerias
          </h1>
          <nav className="p-3 space">
            <ul className="flex space-x-2">
              <li>
                <Link
                  to="/"
                  className="text-xs group relative overflow-hidden hover:text-sky-700"
                >
                  Inicio
                  <span className="block w-0 h-[1px] bg-sky-700 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/Procedimiento"
                  className="text-xs group relative overflow-hidden hover:text-sky-700"
                >
                  Procedimiento
                  <span className="block w-0 h-[1px] bg-sky-700 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/Visual"
                  className="text-xs group relative overflow-hidden hover:text-sky-700"
                >
                  Visual
                  <span className="block w-0 h-[1px] bg-sky-700 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/Descargar"
                  className="text-xs group relative overflow-hidden hover:text-sky-700"
                >
                  Descargar
                  <span className="block w-0 h-[1.5px] bg-sky-700 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        
      </header>
      <Banner />
      <main className="pt20 min-h-screen bg-gray-200">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Procedimiento" element={<Procedimiento />} />
          <Route path="/Visual" element={<Visual />} />
          <Route path="/Descargar" element={<Descargar />} />
        </Routes>
      </main>
      <footer className="flex justify-between bg-gray-100 p-3 border-t-gray-300 border-t-1">

        <div className="flex flex-col">
          <p className="text-center text-xs mb-1 text-gray-700">CONTACTO</p>
          <ul className="flex space-x-2.5 items-center justify-center text-xs">
          <li>
              <button
                className="flex cursor-pointer"
                id="info@dmdcompresores.com"
                onClick={copiar}
              >
                <p className="font-light">info@dmdcompresores.com</p>
                <BsCopy className="ml-0.5 text-gray-400" />
              </button>
            </li>
            <li>
              <button className="flex cursor-pointer" id="11-3959-2363" onClick={copiar}>
                <p className="font-light">11-3959-2363</p>
                <BsCopy className="ml-0.5 text-gray-400" />
              </button>
            </li>
 
          </ul>
        </div>
        <div>
          <p className="text-center text-xs mb-1 text-gray-700">SEGUINOS EN REDES</p>
          <ul className="flex space-x-2.5 items-center justify-center text-xs">
            <a
              target="_blank"
              href="https://www.instagram.com/dmdcompresores/"
              className="text-xl hover:text-sky-700 group relative overflow-visible"
            >
              <FaInstagram className="transition-transform duration-300 group-hover:translate-y-[-5px] group-hover:z-10" />
              <span className="block w-0 h-[1px] bg-sky-700 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/DMDCOMPRESORES"
              className="text-xl hover:text-sky-700 group relative overflow-visible"
            >
              <FaFacebook className="transition-transform duration-300 group-hover:translate-y-[-5px] group-hover:z-10" />
              <span className="block w-0 h-[1px] bg-sky-700 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/dmd-compresores/"
              className="text-xl hover:text-sky-700 group relative overflow-visible"
            >
              <FaLinkedin className="transition-transform duration-300 group-hover:translate-y-[-5px] group-hover:z-10" />
              <span className="block w-0 h-[1px] bg-sky-700 group-hover:w-full transition-all duration-300"></span>
            </a>
          </ul>
        </div>
      </footer>
    </Router>
  );
}

export default App;
