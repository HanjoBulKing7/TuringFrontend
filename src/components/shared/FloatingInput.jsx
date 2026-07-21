import React from "react";


const INPUT_STYLES = "peer block w-full appearance-none rounded-md border border-gray-300 bg-transparent px-3 pb-2 pt-3 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0";

const LABEL_STYLES = "absolute left-3 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text bg-white px-1 text-sm text-gray-500 duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:px-1";


function FloatingInput({ id, label, register, validation, error, type = "text" }) {
  return (
    <div className="relative w-full max-w-sm">
      <input
        type={type}
        id={id}
        placeholder=" "
        className={INPUT_STYLES}
        {...register(id, validation)}
      />
      <label htmlFor={id} className={LABEL_STYLES}>
        {label}
      </label>
      {error && <span className="text-red-500 font-medium text-xs mt-1 h-2 fixed">{error.message}</span>}
    </div>
  );
}

export default FloatingInput;