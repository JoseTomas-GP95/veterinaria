import React from "react";

const Formulario = () => {
  return (
    <div>
      <h2> Crear Cita </h2>

      <form>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre de la mascota"
        />

        <label>Nombre Mascota</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre del dueño de la mascota"
        />

        <label>Fecha</label>
        <input type="date" name="fecha" className="u-full-width" />

        <label>Hora</label>
        <input type="time" name="hora" className="u-full-width" />
      
        <label>Sintomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
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
