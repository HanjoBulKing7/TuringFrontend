import { useState, useEffect } from "react";
import { getInstruments, getInstrumentsByCategory } from "../services/instrumentService";
import toast from "react-hot-toast";

export function useInstruments(categoryId = null) {
  const [data, setData] = useState({ content: [], totalPages: 0, pageNumber: 0 });
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [refreshFlag, setRefreshFlag] = useState(0);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      setLoading(true);
      try {
        const result = categoryId
          ? await getInstrumentsByCategory(categoryId, page, 3)
          : await getInstruments(page, 3);

        if (!ignore) setData(result);
      } catch (err) {
        if (!ignore) toast.error("Error al cargar instrumentos");
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    fetchData();
    return () => { ignore = true; };
  }, [page, categoryId, refreshFlag]);

  useEffect(() => setPage(0), [categoryId]);

  const refetch = () => setRefreshFlag(f => f + 1);

  return { ...data, page, setPage, loading, refetch };
}