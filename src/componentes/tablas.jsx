import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tabla =()=>{
return(
    <>
    <div className="titulo">Reproductor De Musica</div>
    
    <div className="canciones">cancion1</div>
    <div className="canciones">cancion2</div>
    <div className="canciones">cancion3</div>
    <div className="canciones">cancion4</div>
    <div className="canciones">cancion5</div>
    <div className="canciones">cancion6</div>
    <div className="canciones">cancion7</div>
    <div className="canciones">cancion8</div>
    <div className="canciones">cancion9</div>
    <div className="canciones">cancion10</div>
    <div className="canciones">cancion11</div>
    <div className="canciones">cancion12</div>
    <div className="fijo">
        <div className="retroceder"><FontAwesomeIcon icon={faBackward} /></div>
        <div className="play"><FontAwesomeIcon icon={faPlay} /> </div>
        <div className="adelantar"><FontAwesomeIcon icon={faForward} /></div>
    </div>
    </>
)
};

export {Tabla};