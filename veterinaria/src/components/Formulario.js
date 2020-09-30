import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const Formulario = ({ crearCita }) => {

  const [cita, actualizarCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });

  const [error, actualizarError] = useState(false)

  const actualizarState = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value
    })
  }

  // Extraer los valores
  const { mascota, propietario, fecha, hora, sintomas } = cita;
  
  const submitcita = (e) => {
    e.preventDefault();

    //Validación de campos vacios
    if(mascota.trim() === "" || propietario.trim() === "" || fecha.trim() === "" || 
    hora.trim() === "" || sintomas.trim() === "") {
      return actualizarError(true)
    } 
      actualizarError(false)
    

    //ID por cita usando uuid v4
    cita.id = uuidv4();

    //Creo la cita
    crearCita(cita)

    //Borrar campos una vez enviado
    actualizarCita({
      mascota: '',
      propietario: '',
      fecha: '',
      hora: '',
      sintomas: ''
    })
  }

  
  
  return (
    <div className="container">
      <h2> Crear Cita </h2>

      { error ? <p className="alerta-error">Requerimos que llenes todos los campos</p> 
      : null }

      <form
      onSubmit={submitcita}
      >
        <label>Nombre Mascota</label>
        <input
          onChange={actualizarState}
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre de la mascota"
          value={mascota}
        />

        <label>Nombre Mascota</label>
        <input
          onChange={actualizarState}
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre del dueño de la mascota"
          value={propietario}
        />

        <label>Fecha</label>
        <input 
        onChange={actualizarState}
        type="date" 
        name="fecha" 
        className="u-full-width" 
        value={fecha}
        />

        <label>Hora</label>
        <input 
        onChange={actualizarState}
        type="time" 
        name="hora" 
        className="u-full-width" 
        value={hora}
        />
      
        <label>Sintomas</label>
        <textarea
          onChange={actualizarState}
          name="sintomas"
          className="u-full-width"
          value={sintomas}
        ></textarea>

        <button
        type="submit"
        className="u-full-width button-primary"
        >Agendar Cita</button>
      </form>
    </div>
  );
};

export default Formulario;
