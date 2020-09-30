import React, { useState, useEffect }from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';
import PropTypes from 'prop-types';

function App() {

//Trabajando con el local storage en las Citas
let citasIniciales = JSON.parse(localStorage.getItem('citas'));

if(!citasIniciales) {
  citasIniciales = [];
}


const [citas, guardarCitas] = useState(citasIniciales);

useEffect(() => {
let citasIniciales = JSON.parse(localStorage.getItem('citas'));

if(citasIniciales) {
  localStorage.setItem('citas', JSON.stringify(citas));
} else {
  localStorage.setItem('citas', JSON.stringify([]));
}
}, [citas]);

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

Formulario.propTypes={
  crearCita: PropTypes.func.isRequired
}

export default App;
