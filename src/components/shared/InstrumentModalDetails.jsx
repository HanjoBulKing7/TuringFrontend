import { MdCancel } from "react-icons/md";

function InstrumentModal({ isOpen, onClose, initialData = null }) {
  

    const { name, model, description, stock, price, imageUrl } = initialData;

    if (!isOpen) return null;

  return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">

        <div className="relative bg-zinc-900 rounded-xl shadow-2xl w-full max-w-4xl overflow-hidden">

            <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10"
            >
            <MdCancel className="text-3xl text-red-500 hover:text-red-400" />
            </button>

            <div className="flex flex-col md:flex-row">

            {/* Imagen */}
            <div className="md:w-1/2 bg-white flex justify-center items-center p-6">
                <img
                src={imageUrl || "https://via.placeholder.com/400"}
                alt={name}
                className="max-h-[500px] object-contain"
                />
            </div>

            {/* Información */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">

                <h2 className="font-tangerine text-6xl text-amber-100">
                {name}
                </h2>

                <p className="text-zinc-400 text-2xl italic">
                {model}
                </p>

                <p className="mt-6 text-zinc-300 leading-8">
                    {description}
                </p>

                <div className="mt-8 flex justify-between items-center">

                <span className="text-4xl font-bold text-amber-500">
                    ${price}
                </span>

                <span
                    className={`px-4 py-2 rounded-full ${
                    stock > 0
                        ? "bg-green-800 text-green-300"
                        : "bg-red-800 text-red-300"
                    }`}
                >
                    {stock > 0 ? `${stock} disponibles` : "Agotado"}
                </span>

                </div>

            </div>

            </div>

        </div>

        </div>
  );
}

export default InstrumentModal;