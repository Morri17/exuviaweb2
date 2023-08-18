import imagenfondo from "../assets/Imagenes/Imagen2.jpeg";
import logoexuvia from "../assets/Imagenes/exuvialogo.png";
import "../CSS/Inicio.css";

const Inicio = () => {
  return (
    <section id="inicio" className="section">
       <div className="home-container">
      <div className="background">
        <img className="background" src={imagenfondo} alt="" />
      </div>
      <div className="logo-container">
        <img className="logovideo" src={logoexuvia} alt="Logo de la marca" />
      </div>
    </div>
    </section>
  );
};

export default Inicio;
