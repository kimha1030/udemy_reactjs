import React from "react";
import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setAlta(paciente.alta);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    const fecha = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2);
    return fecha + random;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let campos = [nombre, propietario, email, alta, sintomas];
    if (campos.includes("")) {
      console.log("Hay al menos un campo vacio");
      setError(true);
      return;
    }
    setError(false);

    const objPaciente = {
      nombre,
      propietario,
      email,
      alta,
      sintomas,
    };

    if (paciente.id) {
      objPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map((pac) =>
        pac.id === paciente.id ? objPaciente : pac
      );
      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      //console.log(objPaciente);
      objPaciente.id = generarId();
      setPacientes([...pacientes, objPaciente]);
    }

    // Reinicio el state a su valor inicial
    setNombre("");
    setPropietario("");
    setEmail("");
    setAlta("");
    setSintomas("");
  };

  return (
    <div className="p-4 w-full md:w-2/5">
      <h2 className="font-bold text-center">Seguimiento Pacientes</h2>
      <p className="text-center">
        Añade pacientes y{" "}
        <span className="text-emerald-700 font-bold">adminístralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-md p-8 mt-2 flex flex-col gap-4"
      >
        {error && <Error mensaje="Todos los campos son obligatorios" />}
        <div>
          <label
            htmlFor="nombre"
            className="block text-gray-600 uppercase font-bold text-sm"
          >
            Nombre mascota
          </label>
          <input
            id="nombre"
            type="text"
            className="border-2 w-full p-1 placeholder-gray-400 rounded-md"
            placeholder="Escribe el nombre de la mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="">
          <label
            htmlFor="propietario"
            className="block text-gray-600 uppercase font-bold text-sm"
          >
            Nombre propietario
          </label>
          <input
            id="propietario"
            type="text"
            className="border-2 w-full p-1 placeholder-gray-400 rounded-md"
            placeholder="Escribe el nombre del propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-gray-600 uppercase font-bold text-sm"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="border-2 w-full p-1 placeholder-gray-400 rounded-md"
            placeholder="Escriba el email del propietario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="alta"
            className="block text-gray-600 uppercase font-bold text-sm"
          >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-1 placeholder-gray-400 rounded-md"
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="sintomas"
            className="block text-gray-600 uppercase font-bold text-sm"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            type="date"
            className="border-2 w-full p-1 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value={paciente.id ? "Editar paciente" : "Agregar paciente"}
          className="bg-emerald-700 w-full p-2 text-white uppercase font-bold hover:bg-emerald-600 cursor-pointer transition-colors"
        />
      </form>
    </div>
  );
};

export default Formulario;
