import { useState } from "react";
import "./App.css";
import { FaTwitterSquare } from "react-icons/fa";

import { arrayDeCitas } from "./js/citas";
import { generarNumeroAleatorio } from "./js/generarNumeroAleatorio";
import { arrayDeColores } from "./js/colores";

import Boton from "./componentes/Boton";

function App() {
  const [numCita, setNumCita] = useState(
    generarNumeroAleatorio(arrayDeCitas.length)
  );
  const [colorPrincipal, setColorPrincipal] = useState(
    arrayDeColores[generarNumeroAleatorio(arrayDeColores.length - 1)]
  );

  function cambiarCita() {
    setNumCita(generarNumeroAleatorio(arrayDeCitas.length - 1));
  }

  function cambiarColor() {
    setColorPrincipal(
      arrayDeColores[generarNumeroAleatorio(arrayDeColores.length - 1)]
    );
  }

  function manejarClickCambioDeCita() {
    cambiarCita();
    cambiarColor();
  }

  return (
    <div id="aplicacion" style={{ backgroundColor: colorPrincipal }}>
      <div id="quoteBox">
        <p
          id="text"
          style={{ color: colorPrincipal }}
        >{`"${arrayDeCitas[numCita].cita}"`}</p>
        <p id="author" style={{ color: colorPrincipal }}>
          -{arrayDeCitas[numCita].autor}
        </p>

        <div className="botones">
          <div className="botones__redes">
            <a
              href="http://www.twitter.com/intent/tweet"
              id="tweet-quote"
              className="botones-a"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitterSquare color={colorPrincipal} className="react-icon" />
            </a>
          </div>
          <Boton
            id="new-quote"
            className="boton botones__btnNuevaCita"
            onClick={manejarClickCambioDeCita}
            colorPrincipal={colorPrincipal}
          >
            Nueva Cita
          </Boton>
        </div>
      </div>
    </div>
  );
}

export default App;
