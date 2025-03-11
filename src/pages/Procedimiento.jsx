import {
  BookOpen,
  FileSpreadsheet,
  Info,
  LayoutDashboard,
  ListChecks,
  MessageCircle,
  ScrollText,
  Disc,
} from "lucide-react";

const Procedimiento = () => {
  return (
    <>
      <section className="grid grid-cols-2 gap-10 col-span-2 space-y-6 text-slate-100 bg-slate-600/20 p-8 border border-slate-700">
        <div className="space-y-4">
          <h3 className="text-xl font-light flex items-center gap-2 ">
            <div className="bg-blue-500/40 p-4">
              <BookOpen className="h-6 w-6 text-blue-200" />
            </div>
            Guía para Manejar Planos en Excel
          </h3>
          <p className=" text-slate-200 font-light bg-slate-600/20 p-4 border border-slate-700 h-40 grid items-center">
            Este sistema está diseñado para crear planos con objetos registrados
            automáticamente, lo que permite generar de manera rápida y precisa
            los elementos necesarios en el plano. Los objetos se crean de forma
            automática y se ubican en el espacio del plano, lo que facilita el
            trabajo de planificación y asegura que todo esté correctamente
            registrado desde el inicio.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="font-light text-xl flex items-center gap-2">
            <div className="bg-emerald-500/30 p-4">
              <LayoutDashboard className="h-6 w-6 text-emerald-400" />
            </div>
            Hojas principales del sistema
          </h3>
          <ul className="text-slate-200 font-light bg-slate-600/20 p-8 border border-slate-700 h-40 grid items-center">
            <li className="flex items-start gap-2">
              <FileSpreadsheet className="h-5 w-5 mt-1 shrink-0 " />
              <span className="font-extralight">
                <strong className="font-normal">Sala:</strong> En esta sección
                se encuentran los botones que permiten generar los objetos y
                establecer su ubicación dentro del plano.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ScrollText className="h-5 w-5 mt-1 shrink-0 " />
              <span className="font-extralight">
                <strong className="font-normal">Cotización:</strong> Esta hoja
                registra automáticamente los objetos creados y facilita el
                seguimiento de los insumos utilizados en el plano.
              </span>
            </li>
          </ul>
        </div>
      </section>
      <section className="col-span-1 space-y-6 text-slate-100 bg-slate-600/20 p-8 border border-slate-700">
        <div>
          <h3 className="text-xl font-light flex items-center gap-2 text-slate-50">
            <div className="bg-blue-500/40 p-4">
              <ListChecks className="h-6 w-6 text-blue-200" />
            </div>
            Cómo usar el sistema
          </h3>
        </div>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold flex items-center gap-2 text-slate-50 ">
              <Disc className="h-5 w-5 " />
              Paso 1: Define lo que necesitas
            </h4>
            <p className="bg-slate-600/20 text-slate-200 p-4 mt-3 font-light border border-slate-700">
              Piensa en los insumos que incluirás en el plano antes de comenzar.
              Esto te ayudará a seleccionar los objetos correctos desde los
              botones.
            </p>
          </div>

          <div>
            <h4 className="font-semibold flex items-center gap-2 text-slate-50">
              <Disc className="h-5 w-5" />
              Paso 2: Busca los insumos en los botones
            </h4>
            <p className="bg-slate-600/20 text-slate-200 p-4 mt-3 font-light border border-slate-700">
              Cada botón tiene un nombre que indica el tipo de objeto que
              genera. Al hacer clic en un botón, se te harán preguntas
              específicas para configurar el objeto.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-slate-50">Ejemplo:</h4>
            <ul className="space-y-4">
              <li className="bg-slate-600/20 text-slate-200 p-4 mt-3 font-light border border-slate-700">
                Si seleccionas el botón Bajada Estándar, aparecerán las
                siguientes preguntas:
                <ol className="ml-4 mt-2 space-y-2">
                  <li>
                    1. ¿Qué diámetro de troncal deseas? (63 o 32)
                    <ul className="ml-4">
                      <li>Aquí seleccionas el diámetro según tu necesidad.</li>
                    </ul>
                  </li>
                  <li>
                    2. ¿Cuántas bajadas quieres?
                    <ul className="ml-4 font-light">
                      <li>Indica la cantidad de bajadas requeridas.</li>
                    </ul>
                  </li>
                </ol>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold flex items-center gap-2 text-slate-50">
              <Disc className="h-5 w-5" />
              Paso 3: Agregar más objetos (opcional)
            </h4>
            <p className="bg-slate-600/20 text-slate-200 p-4 mt-3 font-light border border-slate-700">
              Una vez respondidas, el sistema agregará automáticamente los
              objetos al plano y registrará la información en la hoja
              Cotización. Si necesitas más objetos, repite los pasos 2 y 3.
            </p>
          </div>
        </div>
      </section>
      <section className="col-span-1 space-y-6 text-slate-100 bg-slate-600/20 p-8 border border-slate-700">
        <div>
          <h3 className="text-xl font-light flex items-center gap-2 text-slate-50">
            <div className="bg-yellow-500/40 transition duration-200 p-4">
              <Info className="h-6 w-6 text-yellow-300" />
            </div>
            Recomendaciones Importantes
          </h3>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold flex items-center gap-2 text-slate-50">
            <Info className="h-5 w-5 " />
            Principales Recomendaciones
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-2 bg-slate-600/20 text-slate-200 p-4 mt-3 font-light border border-slate-700">
              <span className="font-light">
                No copies ni pegues objetos manualmente. Los objetos duplicados
                de esta forma no quedarán registrados en la hoja Cotización.
              </span>
            </li>
            <li className="flex items-start gap-2 bg-slate-600/20 text-slate-200 p-4 mt-3 font-light border border-slate-700">
              <span className="font-light ">
                Si te equivocas al ingresar la cantidad de objetos (por ejemplo,
                indicas 8 bajadas en lugar de 7):
                <ul className="mt-2 space-y-2 ">
                  <li>
                    1. Modifica manualmente la hoja Cotización para corregir el
                    error.
                  </li>
                  <li>
                    2. Resta o ajusta las cantidades según los objetos sobrantes o
                    mal calculados.
                  </li>
                </ul>
              </span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-slate-50">Recuerda:</h4>
          <p className="flex items-start gap-2 bg-slate-600/20 text-slate-200 p-4 mt-3 font-light  border border-slate-700">
            La tabla Cotización registra únicamente los objetos creados
            inicialmente. Si eliminas objetos del plano, la tabla no se
            actualizará automáticamente.
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="font-semibold flex items-center gap-2 text-slate-50">
            <MessageCircle className="h-5 w-5" />
            Soporte y Contacto
          </h4>
          <ul className="space-y-0">
            <li className="flex items-start gap-2 bg-slate-600/20 text-slate-200 p-4 mt-3 font-light  border border-slate-700">
              <span>
              Si tienes dudas sobre el funcionamiento del sistema, contacta a Matías o Máximo del área de Gestión. Para sugerencias o agregar nuevos insumos al sistema, consulta directamente con Máximo de Gestión.
              </span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Procedimiento;
