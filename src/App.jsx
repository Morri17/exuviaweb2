import "./App.css";
import React, { useRef } from "react";
import Header from "./Componentes/Header";
import Contacto from "./Componentes/Contacto";
import Inicio from "./Componentes/Inicio";
import Nosotros from "./Componentes/Nosotros";
import Productos from "./Componentes/Productos";
import BotonWhatsApp from "./WhatsapBoton/WhatsappBoton";

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
        <div ref={sectionRefs[2].ref}>
          <Nosotros />
        </div>
        <div ref={sectionRefs[3].ref}>
          <Contacto />
        </div>
      </div>
        <BotonWhatsApp />
    </>
  );
}

export default App;
