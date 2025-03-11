"use client";

import { Download, FileDown, CheckCircle, Clock, Shield } from "lucide-react";

const Descargar = () => {
  return (
    <>
      <section className="grid grid-cols-1 gap-2 col-span-1 ">
        <div className="text-slate-200 overflow-hidden bg-slate-600/20 border border-slate-700">
          <div className="p-6 ">
            <div className="flex justify-center gap-2 items-center mb-4">
              <FileDown className="h-6 w-6 text-emerald-400" />
              <h3 className="text-xl font-light text-white">
                Documento de Descarga
              </h3>
            </div>
            <p className="text-center font-light text-gray-300 mb-4">
              Plano y cotización archivo Excel
            </p>
            <div className="bg-slate-600/20 backdrop-blur-sm p-6 border border-slate-700">
              <div className="flex justify-between text-gray-200 mb-4">
                <h4 className="">Versión 1.5</h4>
                <h4 className="text-xs rounded-xl bg-emerald-500/20 text-emerald-400 py-1 px-2">
                  Ultima Version
                </h4>
              </div>

              <button className="rounded-lg bg-emerald-600 hover:bg-emerald-500 w-[140px] mx-auto flex justify-center items-center p-2 transition-all duration-200 text-white gap-2 group">
              <Download className="h-5 w-5 group-hover:translate-y-[1px] transition-transform" />Descargar
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 gap-2 col-span-1">
        <div className="overflow-hidden bg-slate-600/20 border border-slate-700">
          <div className="p-6">
            <div className="flex justify-center gap-2 items-center mb-4">
              <FileDown className="h-6 w-6 text-blue-400" />
              <h3 className="text-xl font-light text-white">Manual Técnico</h3>
            </div>
            <p className="text-center font-light text-gray-300 mb-4">
              Procedimientos y manejo
            </p>
            <div className="bg-slate-600/20 backdrop-blur-sm p-6 border border-slate-600/30">
              <div className="flex justify-between text-gray-200 mb-4">
                <h4>Toda la información técnica necesaria</h4>
                <h4 className="text-xs rounded-xl bg-blue-500/20 text-blue-400 py-1 px-2">
                  PDF
                </h4>
              </div>

              <button className="rounded-lg bg-blue-600 hover:bg-blue-500 w-[140px] mx-auto flex justify-center items-center p-2 transition-all duration-200 text-white gap-2 group">
              <Download className="h-5 w-5 group-hover:translate-y-[1px] transition-transform" />Descargar
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-600/20 col-span-2 mt-8  border border-slate-700 p-6">
        <div className="text-center mb-8">
          <h1 className="font-light text-2xl text-white mb-2">
            Centro de Descargas
          </h1>
          <p className="font-extralight text-sm text-gray-300">
            Descarga los documentos técnicos y catálogos más recientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-600/20 backdrop-blur p-8 transition-all duration-300 hover:-translate-y-1 border border-slate-700 group">
            <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <CheckCircle className="h-8 w-8 text-emerald-400" />
            </div>
            <h4 className="font-medium text-white text-center mb-3 text-lg">
              Descargas Confiables
            </h4>
            <p className="font-light text-sm text-gray-300 text-center">
              Todos los archivos son verificados y seguros
            </p>
          </div>

          <div className="bg-slate-600/20 backdrop-blur p-8 transition-all duration-300 hover:-translate-y-1 border border-slate-700 group">
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/10 p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Clock className="h-8 w-8 text-blue-400" />
            </div>
            <h4 className="font-medium text-white text-center mb-3 text-lg">
              Archivos Verificados
            </h4>
            <p className="font-light text-sm text-gray-300 text-center">
              Documentación revisada por expertos
            </p>
          </div>

          <div className="bg-slate-600/30 backdrop-blur p-8 transition-all duration-300 hover:-translate-y-1 border border-slate-700 group">
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/10 p-4  w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Shield className="h-8 w-8 text-purple-400" />
            </div>
            <h4 className="font-medium text-white text-center mb-3 text-lg">
              Actualizaciones Regulares
            </h4>
            <p className="font-light text-sm text-gray-300 text-center">
              Contenido actualizado periódicamente
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Descargar;
