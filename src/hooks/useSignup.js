import { useState } from "react";
import { signup , login } from "../services/authService";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

export function useSignup() {
  const [loading, setLoading] = useState(false);
  const { login: setSession } = useAuth();

  const handleSignup = async (formData) => {
    setLoading(true);
    try {
      const result = await signup(formData);
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

  const handleLogin = async (formData) => {
    setLoading(true);
    try{
        const res = await login(formData);
        setSession(res.token)
        return true;
    }catch(err){
      const message = err.response?.data?.message || 'Error al iniciar sesión';
      toast.error(message)
    }finally{
      setLoading(false)
    }
  }

  return { handleSignup, handleLogin, loading };
}