import { useState } from "react";
import "./App.css";

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
          {arrayDeCitas[numCita].autor}
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
              <svg
                height="32px"
                id="Layer_1"
                version="1.0"
                viewBox="0 0 32 32"
                width="32px"
                className="botones-redes-svg"
              >
                <g>
                  <path
                    className="zonaColoreada"
                    d="M32,30c0,1.104-0.896,2-2,2H2c-1.104,0-2-0.896-2-2V2c0-1.104,0.896-2,2-2h28c1.104,0,2,0.896,2,2V30z"
                    fill={colorPrincipal}
                  />
                  <path
                    d="M25.987,9.894c-0.736,0.322-1.525,0.537-2.357,0.635c0.85-0.498,1.5-1.289,1.806-2.231   c-0.792,0.461-1.67,0.797-2.605,0.978C22.083,8.491,21.017,8,19.838,8c-2.266,0-4.1,1.807-4.1,4.038   c0,0.314,0.036,0.625,0.104,0.922c-3.407-0.172-6.429-1.779-8.452-4.221c-0.352,0.597-0.556,1.29-0.556,2.032   c0,1.399,0.726,2.635,1.824,3.36c-0.671-0.022-1.304-0.203-1.856-0.506c-0.001,0.017-0.001,0.034-0.001,0.052   c0,1.955,1.414,3.589,3.29,3.96c-0.343,0.09-0.705,0.142-1.081,0.142c-0.264,0-0.52-0.024-0.77-0.072   c0.52,1.604,2.034,2.771,3.828,2.805C10.67,21.594,8.9,22.24,6.979,22.24c-0.33,0-0.658-0.018-0.979-0.056   c1.814,1.145,3.971,1.813,6.287,1.813c7.541,0,11.666-6.154,11.666-11.491c0-0.173-0.005-0.35-0.012-0.521   C24.741,11.414,25.438,10.703,25.987,9.894z"
                    fill="#FFFFFF"
                  />
                </g>
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
              </svg>
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
