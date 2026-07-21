import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { createInstrument, updateInstrument } from "../../services/instrumentService";
import toast from "react-hot-toast";

function InstrumentModal({ isOpen, onClose, onSuccess, categories, initialData = null }) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const isEditing = !!initialData; // Check if there is sent data to edit the record 

  useEffect(() => {
    if (initialData) reset(initialData);
    else reset({ name: "", price: "", categoryId: "", model: "", description: "", stock: "", imageUrl: "" });
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const onSubmit = async (data) => {
    try {
      const payload = { ...data, price: Number(data.price), stock: Number(data.stock), categoryId: Number(data.categoryId) };
      if (isEditing) {
        await updateInstrument(initialData.id, payload);
        toast.success("Instrumento actualizado");
      } else {
        await createInstrument(payload);
        toast.success("Instrumento creado");
      }
      onSuccess();
      onClose();
    } catch (err) {
      toast.error(err.response?.data?.message || "Error al guardar");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-zinc-900 rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-serif text-amber-100 mb-4">
          {isEditing ? "Editar instrumento" : "Nuevo instrumento"}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <input {...register("name", { required: true })} placeholder="Nombre" className="bg-zinc-800 text-white p-2 rounded" />
          <input {...register("price", { required: true })} placeholder="Precio" type="number" step="0.01" className="bg-zinc-800 text-white p-2 rounded" />

          <select {...register("categoryId", { required: true })} className="bg-zinc-800 text-white p-2 rounded">
            <option value="">Selecciona categoría</option>
            {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>

          <input {...register("model", { required: true })} placeholder="Modelo" className="bg-zinc-800 text-white p-2 rounded" />
          <textarea {...register("description")} placeholder="Descripción" className="bg-zinc-800 text-white p-2 rounded" />
          <input {...register("stock", { required: true })} placeholder="Stock" type="number" className="bg-zinc-800 text-white p-2 rounded" />
          <input {...register("imageUrl")} placeholder="URL de imagen" className="bg-zinc-800 text-white p-2 rounded" />

          <div className="flex gap-3 mt-4">
            <button type="button" onClick={onClose} className="flex-1 bg-zinc-700 text-white py-2 rounded">Cancelar</button>
            <button type="submit" className="flex-1 bg-amber-600 text-white py-2 rounded">Guardar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InstrumentModal;