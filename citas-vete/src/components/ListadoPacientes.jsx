import React from "react";
import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className="p-4 w-full md:w-3/5 md:h-screen md:overflow-y-scroll flex flex-col items-center">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-bold text-center">Seguimiento Pacientes</h2>
          <p className="text-center mb-2">
            Añade pacientes y{" "}
            <span className="text-emerald-700 font-bold">adminístralos</span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-bold text-center">No hay pacientes</h2>
          <p className="text-center mb-2">
            Comienza agregando pacientes{" "}
            <span className="text-emerald-700 font-bold">
              y aparecerán en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
