import React from "react";

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, email, alta, sintomas, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm("¿Deseas eliminar el paciente?");
    if (respuesta) {
      eliminarPaciente(id);
    }
  };

  return (
    <div className="w-full mb-3 bg-white shadow-md p-5 rounded-xl">
      <p className="mb-1 font-bold text-gray-700 text-sm uppercase">
        Nombre: <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="mb-1 font-bold text-gray-700 text-sm uppercase">
        Propietario:{" "}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="mb-1 font-bold text-gray-700 text-sm uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="mb-1 font-bold text-gray-700 text-sm uppercase">
        Alta: <span className="font-normal normal-case">{alta}</span>
      </p>
      <p className="mb-1 font-bold text-gray-700 text-sm uppercase">
        Sintomas: <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div className="flex justify-end">
        <button
          className="py-2 px-10 mr-2 text-white text-xs font-bold uppercase rounded bg-indigo-600 hover:bg-indigo-700"
          type="button"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          className="py-2 px-10 text-white text-xs font-bold uppercase rounded bg-red-600 hover:bg-red-700"
          type="button"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
