function Pagination({ page, totalPages, setPage }) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-4 mt-8">
      <button
        onClick={() => setPage(p => Math.max(p - 1, 0))}
        disabled={page === 0}
        className="px-4 py-2 rounded-md bg-zinc-800 text-amber-100 disabled:opacity-30"
      >
        Anterior
      </button>
      <span className="text-zinc-400">
        Página {page + 1} de {totalPages}
      </span>
      <button
        onClick={() => setPage(p => Math.min(p + 1, totalPages - 1))}
        disabled={page === totalPages - 1}
        className="px-4 py-2 rounded-md bg-zinc-800 text-amber-100 disabled:opacity-30"
      >
        Siguiente
      </button>
    </div>
  );
}

export default Pagination;