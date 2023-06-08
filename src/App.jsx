import { faPlay, faForward, faBackward, faPause } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./componentes/tablas.css";
import "./App.css";
import { useState, useEffect, useRef } from "react";

function App() {
  // Estado para almacenar la lista de canciones
  const [canciones, setCanciones] = useState([]);
  const [indiceCancion, setIndiceCancion] = useState(0); // Estado para controlar el índice de la canción actual
  const audioRef = useRef(null);
  const baseUrl = "https://assets.breatheco.de/apis/sound/";
  const [isPlaying, setIsPlaying] = useState(false);

  // Efecto para obtener las canciones al cargar el componente
  useEffect(() => {
    GetCanciones("https://assets.breatheco.de/apis/sound/songs");
  }, []);

  // Función para obtener las canciones mediante una solicitud HTTP
  const GetCanciones = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCanciones(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Manejador de play y pause
  const PlayPause = () => {
    const audioElement = audioRef.current;

    if (audioElement.paused) {
      audioElement.play();
      setIsPlaying(true);
    } else {
      audioElement.pause();
      setIsPlaying(false);
    }
  };

  // Manejador para el botón de avanzar
  const clicAvanzar = () => {
    const siguienteCancion = (indiceCancion + 1) % canciones.length;
    setIndiceCancion(siguienteCancion);
    setIsPlaying(false);
  };

  // Manejador  botón de retroceder
  const clicRetroceder = () => {
    const cancionAnterior = (indiceCancion - 1 + canciones.length) % canciones.length;
    setIndiceCancion(cancionAnterior);
    setIsPlaying(false);
  };

  return (
    <>
      <div className="titulo">Reproductor De Musica</div>
      {canciones.map((cancion, index) => (
        <div className="cancion" key={cancion.id}>
          <h3>{cancion.name}</h3>
          {index === indiceCancion && (
            <audio ref={audioRef}  src={baseUrl + cancion.url} type="audio/mpeg" />
          )}
        </div>
      ))}
      <div className="fijo">
        {canciones.length > 0 && (
          <audio ref={audioRef}  src={baseUrl + canciones[indiceCancion]?.url} type="audio/mpeg" />
        )}
        <div className="retroceder" onClick={clicRetroceder}>
          <FontAwesomeIcon icon={faBackward} />
        </div>
        <div className="play" onClick={PlayPause}>
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </div>
        <div className="adelantar" onClick={clicAvanzar}>
          <FontAwesomeIcon icon={faForward} />
        </div>
      </div>
    </>
  );
}

export default App;
