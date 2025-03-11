import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import Procedimiento from "./pages/Procedimiento.jsx";
import Visual from "./pages/Visual";
import Descargar from "./pages/Descargar";
import Formulario from "./pages/Formulario";
import logo from "./assets/logonuevo.png";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsCopy } from "react-icons/bs";
import Banner from "./components/Banner";
import { useState, useEffect } from "react";

const copiar = (event) => {
  const id = event.currentTarget.id;
  navigator.clipboard.writeText(id).catch((err) => {
    console.error("Error al copiar el texto: ", err);
  });
};

const NavLink = ({ to, children }) => (
  <li>
    <Link
      to={to}
      className="text-xs group relative overflow-hidden hover:text-sky-700"
    >
      {children}
      <span className="block w-0 h-[1px] bg-sky-700 group-hover:w-full transition-all duration-300"></span>
    </Link>
  </li>
);

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

function App() {
  const [setIsVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  const handleMouseMove = () => {
    setIsVisible(true);
  };

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return (
    <Router>
      <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
        <header>
          <nav
            className={`bg-gradient-to-b from-slate-100 to-slate-50 fixed top-0 left-0 w-full flex items-center p-3 z-10 transition-all duration-300 space-x-2 text-slate-500 ${
              scrollY > 80 ? "h-10" : "h-20"
            }`}
          >
            <a
              href="https://www.solucionesdmd.com/"
              className={` transition-all duration-300 transform hover:-translate-y-1 ${
                scrollY > 80 ? "max-h-10" : "max-h-20"
              }`}
            >
              <img
                src={logo}
                className={`transition-all duration-300 transform hover:-translate-y-0.25 object-cover ${
                  scrollY > 80 ? "max-h-10" : "max-h-20"
                }`}
                alt="logo"
              />
            </a>

            <div className="flex items-center flex-1 justify-between">
              <h1
                className={`border-l-1 border-solid border-gray-400 transition-all duration-300 ${
                  scrollY > 80 ? "text-sm px-3" : "text-xl p-3"
                }`}
              >
                Plataforma Cañerías
              </h1>

              <nav className="p-3 space">
                <ul className="flex space-x-5">
                  <NavLink to="/Procedimiento">Procedimiento</NavLink>
                  <NavLink to="/Visual">Visual</NavLink>
                  <NavLink to="/Formulario">Formulario</NavLink>
                  <NavLink to="/Descargar">Descargar</NavLink>
                </ul>
              </nav>
            </div>
          </nav>
          <div>
            <div className="h-20 bg-gradient-to-b from-slate-100 to-slate-50"></div>
            <Banner />
          </div>
        </header>

        <main className="px-50 py-5 pt-10 grid grid-cols-2 gap-10">
          <Routes>
            <Route path="/" element={<Navigate to="/Procedimiento" />} />
            <Route path="/Procedimiento" element={<Procedimiento />} />
            <Route path="/Visual" element={<Visual />} />
            <Route path="/Formulario" element={<Formulario />} />
            <Route path="/Descargar" element={<Descargar />} />
          </Routes>
        </main>

        <footer className="flex justify-between bg-gradient-to-b from-slate-100 to-slate-50 p-3 text-slate-700">
          <div className="flex flex-col">
            <p className="text-center text-xs mb-1">CONTACTO</p>
            <ul className="flex space-x-2.5 items-center justify-center text-xs">
              <li>
                <button
                  className="flex cursor-pointer"
                  id="info@dmdcompresores.com"
                  onClick={copiar}
                >
                  <p className="font-light">info@dmdcompresores.com</p>
                  <BsCopy className="ml-0.5 text-gray-600" />
                </button>
              </li>
              <li>
                <button
                  className="flex cursor-pointer"
                  id="11-3959-2363"
                  onClick={copiar}
                >
                  <p className="font-light">11-3959-2363</p>
                  <BsCopy className="ml-0.5 text-gray-600" />
                </button>
              </li>
            </ul>
          </div>
          <div className="">
            <p className="text-center text-xs mb-1">
              SEGUINOS EN REDES
            </p>
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
      </div>
    </Router>
  );
}

export default App;
