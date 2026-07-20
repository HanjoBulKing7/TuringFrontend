import React from 'react'
import { useForm } from 'react-hook-form';
import FloatingInput from '../shared/FloatingInput';
import { useSignup } from '../../hooks/useSignup';
import { useNavigate } from 'react-router-dom';

function LoginForm({onToggle }) {

    const { register, handleSubmit, reset, formState: { errors} } = useForm({ mode: "onTouched"});
    const { handleLogin, loading } = useSignup();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
      const success = await handleLogin(data);
      if (success) navigate("/");
    };


  return (
    <div className='h-110 w-80 bg-white rounded-lg flex flex-col items-center mt-10 border-2 border-black/75'>
        <h2 className='text-3xl font-sans font-light'>Ingresa a tu cuenta </h2>
        <form className="flex flex-col gap-7 bg-white p-6 rounded-md" onSubmit={handleSubmit(onSubmit)} >
          <FloatingInput
            id="username"
            label="Username"
            register={register}
            error={errors.username}
            validation={{
              required: "Ingrese su nombre de usuario",
              minLength: { value: 4, message: "Nombre de usuario debe contener 4 caracteres mínimo" }
            }}
          />

          <FloatingInput
            id="password"
            label="Password"
            type="password"
            register={register}
            error={errors.password}
            validation={{
              required: "Ingrese su contraseña",
              minLength: { value: 7, message: "Mínimo 7 caracteres" }
            }}
          />

          <FloatingInput
            id="confirmPassword"
            label="Confirmar password"
            type="password"
            register={register}
            error={errors.confirmPassword}
            validation={{
              required: "Confirme su contraseña",
              validate: (value, formValues) => value === formValues.password || "Las contraseñas no coinciden"
            }}
          />

          <p className="text-sm text-gray-500 mt-4">
            ¿No tienes cuenta?{" "}
            <button type="button" onClick={onToggle} className="text-blue-600 hover:underline">
              Regístrate
            </button>
          </p>

          <button type="submit" disabled={loading} className="bg-blue-600 text-white rounded-md py-2 mt-2 disabled:opacity-50">
            {loading ? "Ingresando..." : "Ingresar"}
          </button>
        </form>
    </div>
  )
}

export default LoginForm