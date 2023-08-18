import "./WhatsappBoton.css";
import whatsapplogo from "../assets/Imagenes/whatsapplogo.avif";

const BotonWhatsApp = () => {
  const handleWhatsAppClick = () => {
     window.open("https://wa.me/+5493464551583");
  };

  return (
    <a
      className="boton-whatsapp"
      href="https://wa.me/+5493464551583"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="whatsapplogo" src={whatsapplogo} alt="WhatsApp" />
    </a>
  );
};

export default BotonWhatsApp;
