import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useInstruments } from '../hooks/useInstruments';
import { getCategories, deleteInstrument } from '../services/instrumentService';
import InstrumentCard from './shared/InstrumentCard';
import Pagination from './Pagination';
import toast from 'react-hot-toast';
import InstrumentModal from './shared/InstrumentModal';
import CategoryModal from './shared/CategoryModal';

function Catalog({ categoryId = null }) {
  const { isAdmin } = useAuth();
  const { content, totalPages, page, setPage, loading, refetch } = useInstruments(categoryId);
  const [categories, setCategories] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [editingInstrument, setEditingInstrument] = useState(null);

  useEffect(() => {
    getCategories().then(setCategories).catch(() => {});
  }, []);

  const handleEdit = (instrument) => {
    setEditingInstrument(instrument);
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (!confirm("¿Eliminar este instrumento?")) return;
    try {
      await deleteInstrument(id);
      toast.success("Instrumento eliminado");
      refetch();
    } catch {
      toast.error("Error al eliminar");
    }
  };

  if (loading) return <p className="text-center text-zinc-400 py-10">Cargando...</p>;

  return (
    <section className='py-20 px-6'>
      <div className='max-w-7xl mx-auto'>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h2 className='text-4xl font-semibold text-amber-950 text-center'>Nuestro catálogo</h2>
          {isAdmin && (
            <button
              onClick={() => { setEditingInstrument(null); setModalOpen(true); }}
              className="bg-amber-600 text-white px-4 py-2 rounded-md text-2xl"
            >
              + Agregar instrumento
            </button>
          )}
          {isAdmin && (
            <button
              onClick={() => setCategoryModalOpen(true)}
              className="bg-zinc-700 text-white px-4 py-2 rounded-md"
            >
              + Agregar categoría
            </button>
          )}
        </div>

        <p className='mt-6 text-center text-gray-600 max-w-3xl mx-auto'>
          Descubre nuestra selección de instrumentos musicales organizados por
          categorías. Filtra fácilmente entre guitarras, bajos, teclados,
          baterías y mucho más para encontrar el instrumento ideal.
        </p>

        <div className="bg-black py-12 px-6 mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {content.map(instrument => (
              <InstrumentCard
                key={instrument.id}
                instrument={instrument}
                isAdmin={isAdmin}
                onEdit={() => handleEdit(instrument)}
                onDelete={() => handleDelete(instrument.id)}
              />
            ))}
          </div>
          <Pagination page={page} totalPages={totalPages} setPage={setPage} />
        </div>
      </div>

      {isAdmin && (
        <InstrumentModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onSuccess={refetch}
          categories={categories}
          initialData={editingInstrument}
        />
      )}
      {isAdmin && (
        <CategoryModal
          isOpen={categoryModalOpen}
          onClose={() => setCategoryModalOpen(false)}
          onSuccess={() => getCategories().then(setCategories)}
        />
      )}

    </section>
  );
}

export default Catalog;