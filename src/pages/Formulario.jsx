import { Download } from "lucide-react";

const Formulario = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 col-span-2">
      <section className="bg-slate-600/20 border border-slate-700 p-5 text-white">
        <h4 className="mb-4 text-center text-xl font-light text-slate-200">
          Bloques
        </h4>
        <form
          className="h-64 overflow-auto scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-400"
          action=""
        >
          <div className="grid gap-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="flex max-h-12 gap-4 rounded bg-slate-600/20 p-2 border-slate-500/50 border"
              >
                <input
                  className="w-full rounded-md bg-slate-500/20 p-2 text-slate-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-500 border border-slate-500"
                  type="text"
                  placeholder="Texto"
                />
                <input
                  className="w-24 rounded-md bg-slate-500/20 p-2 text-slate-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-500 border border-slate-500"
                  type="number"
                  placeholder="Número"
                />
              </div>
            ))}
          </div>
        </form>
      </section>

      {/* Section 2: Comment section */}
      <section className=" bg-slate-600/20 border border-slate-700 p-5 text-white">
        <h4 className="mb-4 text-center text-xl font-light text-slate-200">
          Comentarios
        </h4>
        <div className="bg-slate-600/20 p-4 h-64 border border-slate-600 grid items-center">
          <p className="text-slate-100">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            autem mollitia voluptates. Quibusdam nesciunt explicabo ipsum quos
            cumque dignissimos, vero velit. Quam fugit nihil pariatur blanditiis
            alias rem dolor quidem.
          </p>
        </div>
      </section>

      {/* Section 3: Insumos form */}
      <section className="bg-slate-600/20 border border-slate-700 p-5 text-white">
        <h4 className="mb-4 text-center text-xl font-light text-slate-200">
          Insumos
        </h4>
        <form
          className="h-64 overflow-auto scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-400"
          action=""
        >
          <div className="grid gap-3">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="flex max-h-12 gap-4 rounded bg-slate-600/20 p-2 border-slate-500/50 border"
              >
                <input
                  className="w-full rounded-md bg-slate-500/20 p-2 text-slate-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-500 border border-slate-500"
                  type="text"
                  placeholder="Texto"
                />
                <input
                  className="w-24 rounded-md bg-slate-500/20 p-2 text-slate-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-500 border border-slate-500"
                  type="number"
                  placeholder="Número"
                />
              </div>
            ))}
          </div>
        </form>
      </section>

      {/* Section 4: Download button */}

      <section className="bg-slate-600/20 border border-slate-700 p-5 text-white">
        <h4 className="mb-4 text-center text-xl font-light text-slate-200">
          Ingresar A.C.
        </h4>
        <div className="bg-slate-600/20 p-4 h-64 border border-slate-600 grid items-center justify-center">
          <button className="group flex w-[140px] items-center justify-center gap-2 rounded-lg bg-blue-600 p-2 text-white transition-all duration-200 hover:bg-blue-500">
            <Download className="h-5 w-5 transition-transform group-hover:translate-y-[1px]" />
            Enviar
          </button>
        </div>
      </section>
    </div>
  );
};

export default Formulario;
