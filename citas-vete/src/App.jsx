import ListadoPacientes from "./components/ListadoPacientes";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import { useState, useEffect } from "react";

function App() {
  const valorInicial = JSON.parse(localStorage.getItem("pacientes")) ?? [];
  console.log(valorInicial);
  const [pacientes, setPacientes] = useState(valorInicial);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacientesActualizados);
  };

  return (
    <div className="container p-4 mx-auto">
      <Header />
      <div className="flex flex-wrap">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
