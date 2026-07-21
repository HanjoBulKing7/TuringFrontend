import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { createCategory, updateCategory } from "../../services/instrumentService"
import toast from "react-hot-toast";

function CategoryModal({ isOpen, onClose, onSuccess, initialData = null }) {
  const { register, handleSubmit, reset } = useForm();
  const isEditing = !!initialData;

  useEffect(() => {
    reset(initialData || { name: "", description: "" });
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const onSubmit = async (data) => {
    try {
      if (isEditing) {
        await updateCategory(initialData.id, data);
        toast.success("Categoría actualizada");
      } else {
        await createCategory(data);
        toast.success("Categoría creada");
      }
      onSuccess();
      onClose();
    } catch (err) {
      toast.error(err.response?.data?.message || "Error al guardar");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-zinc-900 rounded-lg p-6 w-full max-w-sm">
        <h2 className="text-xl font-serif text-amber-100 mb-4">
          {isEditing ? "Editar categoría" : "Nueva categoría"}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <input {...register("name", { required: true })} placeholder="Nombre" className="bg-zinc-800 text-white p-2 rounded" />
          <textarea {...register("description")} placeholder="Descripción" className="bg-zinc-800 text-white p-2 rounded" />
          <div className="flex gap-3 mt-2">
            <button type="button" onClick={onClose} className="flex-1 bg-zinc-700 text-white py-2 rounded">Cancelar</button>
            <button type="submit" className="flex-1 bg-amber-600 text-white py-2 rounded">Guardar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CategoryModal;