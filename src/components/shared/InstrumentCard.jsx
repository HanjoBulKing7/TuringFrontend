import { isAxiosError } from 'axios';
import react from 'react'
import { FaEdit } from "react-icons/fa";

function InstrumentCard({ instrument, onEdit, isAdmin , onClick }) {
  const { name, model, price, stock, imageUrl } = instrument;

  return (
    <div className="bg-zinc-900 border border-amber-600/30 rounded-lg overflow-hidden hover:border-amber-500/60 transition-all
     hover:shadow-lg hover:shadow-amber-900/30"
      onClick={onClick}
     >
        <img src={imageUrl || "https://via.placeholder.com/400x300?text=Guitar"} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-serif text-amber-100 text-lg">{name}</h3>
        <p className="text-zinc-400 text-sm">{model}</p>
        <div className="flex items-center justify-between mt-3">
          <p className="text-amber-500 font-bold text-xl">${price}</p>
          <span className={`text-xs px-2 py-1 rounded-full ${stock > 0 ? "bg-green-900 text-green-300" : "bg-red-900 text-red-300"}`}>
            {stock > 0 ? `Stock: ${stock}` : "Agotado"}
          </span>
        </div>
      {
        isAdmin &&
          <div className='flex w-full justify-end'> 
            <button onClick={onEdit}>
                    <FaEdit className='text-white text-2xl'/>
            </button>
          </div>
      }
      </div>
    </div>
  );
}

export default InstrumentCard;