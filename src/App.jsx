import "./App.css";
import { useRef } from "react";
import Header from "./Componentes/Header";
import Contact from "./Componentes/Contact";
import Inicio from "./Componentes/Inicio";
import Nosotros from "./Componentes/Nosotros";
import Productos from "./Componentes/Productos";
import BotonWhatsApp from "./WhatsapBoton/WhatsappBoton";
import Footer from "./Componentes/Footer";


function App() {
  const sectionRefs = [
    { id: "Inicio", ref: useRef(), label: "Inicio" },
    { id: "Productos", ref: useRef(), label: "Productos" },
    { id: "Nosotros", ref: useRef(), label: "Nosotros" },
    { id: "Contacto", ref: useRef(), label: "Contacto" },
  ];
  return (
    <>
      <div>
        <Header sections={sectionRefs} />
        <div ref={sectionRefs[0].ref}>
          <Inicio />
        </div>
        <div ref={sectionRefs[1].ref}>
          <Productos />
        </div>
        
        <div ref={sectionRefs[3].ref}>
          <Contact/>
        </div>
      </div>
        <BotonWhatsApp />
        <Footer/>
    </>
  );
}

export default App;

/* <div ref={sectionRefs[2].ref}>
<Nosotros />
</div> */