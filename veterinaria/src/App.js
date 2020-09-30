import React from 'react';
import Formulario from './components/Formulario';
function App() {
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
          <Formulario/>
        </div>
      </div>
    </div>
  );
}

export default App;
