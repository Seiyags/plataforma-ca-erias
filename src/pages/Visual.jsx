import { useState } from "react"
import { X } from "lucide-react"

const Visual = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const openImage = (src) => {
    setSelectedImage(src)
  }

  const closeImage = () => {
    setSelectedImage(null)
  }

  const images = [
    {
      src: "images/cotizacion.PNG",
      description:
        "Un Ejemplo de como se ve la Hoja Cotización, con los bloques de cañerias y sus respectivos precios unitarios.",
    },
    {
      src: "images/plano.PNG",
      description:
        "Podemos ver en un ejemplo de los botones funcionales en la Hoja Sala con sus respectivas formas descrita en los botones, al hacer click en cualquiera de ellas se generara la forma respectiva a su nombre y se enviara la cantidad genera automaticamente a la Hoja Cotizacion.",
    },
    {
      src: "images/cotizacion2.PNG",
      description:
        "En esta imagen vemos la misma Hoja de Cotizacion pero con algunos cambios, estos cambios son debido a la generacion de objetos por los botones, por estos cambios generados en la cotizacion se automatiza los precios con la cantidad generada de cada bloque individual, dando un precio total de toda la Cañeria.",
    },
    {
      src: "images/plano2.PNG",
      description:
        "En esta Ultima imagen vemos la distribucion de los objetos generados por los botones y ya terminado el Plano de Cañeria.",
    },
  ]

  return (
    <div className="w-full py-8 col-span-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto px-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="rounded-sm flex flex-col justify-between bg-slate-600/20 overflow-hidden border border-slate-700/50 transition-all hover:shadow-lg hover:shadow-slate-700/20 hover:border-slate-600"
          >
            <div className="p-4 h-40 overflow-auto flex">
              <p className="text-slate-300 text leading-relaxed">{image.description}</p>
            </div>
            <div className="relative overflow-hidden group mt-auto">
              <img
                src={image.src || "/placeholder.svg"}
                alt={`Imagen ${index + 1}`}
                className="w-full h-[280px] object-cover transition-transform duration-300 group-hover:scale-105"
                onClick={() => openImage(image.src)}
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center"
                onClick={() => openImage(image.src)}
              >
                <button className="mb-4 px-4 py-2 bg-slate-900/80 text-white rounded-full text-sm backdrop-blur-sm transition-colors hover:bg-slate-700 cursor-pointer">
                  Ver ampliado
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-200"
          onClick={closeImage}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Imagen ampliada"
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl shadow-black/50"
            />
            <button
              onClick={closeImage}
              className="absolute -top-3 -right-3 text-white bg-slate-900 p-2 rounded-full shadow-lg hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Cerrar imagen"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Visual

