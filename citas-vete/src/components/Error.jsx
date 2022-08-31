import React from "react";

const Error = ({ mensaje }) => {
  return (
    <p
      className="rounded bg-red-700 font-bold 
        text-center text-white text-xs uppercase"
    >
      {mensaje}
    </p>
  );
};

export default Error;
