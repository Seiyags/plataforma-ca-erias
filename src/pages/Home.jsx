import logo from "../assets/imagen_home.avif";

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <h2 className="text-xl mb-6 pt-10">Inicio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl p-5">
        <div className="transition-transform duration-300 ease-in-out transform hover:scale-105 px-10 py-5 flex justify-center border-1 border-gray-300 bg-white h-full flex-wrap">
          <h3 className="text-xl">Nosotros</h3>
          <div className="flex justify-center items-center w-full">
          <p className="text-sm text-gray-700 text-center">
          Con 47 años de experiencia, la empresa ofrece soluciones eficientes en aire comprimido industrial, destacándose por su fiabilidad, eficiencia energética y tecnología de alta calidad. <br /><br />
              <b>Misión:</b> Compromiso, trabajo en equipo y ética con proveedores, colaboradores, competidores y clientes.<br /><br />
              <b>Visión:</b> Mantenernos a la vanguardia del sector, invirtiendo en investigación, desarrollo e ingeniería para ofrecer respuestas con valor agregado.<br /><br />
              <b>Nuestros Valores:</b> Compromiso, trabajo en equipo y conducta ética, aplicados hacia nuestros proveedores, colaboradores, competidores y clientes.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="max-w-full h-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
            src={logo}
            alt="Logo"
          />
        </div>
      </div>
      
    </section>
  );
};

export default Home;
