import "../CSS/Inicio.css";
import logoexuvia from "../assets/Imagenes/exuvialogo.png";

const Inicio = () => {
  return (
    <section id="inicio" className="section-inicio">
      <div className="background-inicio">
     <img className="logo-imagen" src={logoexuvia} alt="Logo de la marca" />
        <div className="logo-container">
        </div>
      </div>
    </section>
  );
};

export default Inicio;
