import React, { useState }from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';


function App() {

const [citas, guardarCitas] = useState([]);

const crearCita = cita => {
  guardarCitas([
    ...citas,
    cita
  ])
};

const eliminarCita = id => {
const citasFilter = citas.filter(cita => cita.id !== id);
guardarCitas(citasFilter)
};

const tituloCitas = citas.length === 0 ? "Sin citas" : "Administra tus citas";

  return (
    <div className="App">
      <h1>Clinca Veterinaria</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            1
          </div>
          <div className="one-half column">
            2
          </div>
          <Formulario
            crearCita={crearCita}
            />
        </div>
        
        <div className="one-half column">
          <h2>{tituloCitas}</h2>
          {citas && citas.map(cita => (
            <Cita 
            cita={cita}
            key={cita.id}
            eliminarCita={eliminarCita}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
