import { useState } from "react";
import { signup } from "../services/authService";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

export function useSignup() {
  const [loading, setLoading] = useState(false);
  const { login: setSession } = useAuth();

  const handleSignup = async (formData) => {
    setLoading(true);
    try {
      const result = await signup(formData);
      setSession(result.token ?? result, formData.username);
      toast.success("¡Cuenta creada con éxito!");
      return true;
    } catch (err) {
      const message = err.response?.data?.message || "Error al crear la cuenta";
      toast.error(message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { handleSignup, loading };
}