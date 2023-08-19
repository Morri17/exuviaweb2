import React from "react";
import "../CSS/Productos.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const productosData = [
  {
    id: 1,
    nombre: "Semillas",
    imagen: "https://via.placeholder.com/150",
    descripcion: "Descripción del Producto 1",
  },
  {
    id: 2,
    nombre: "Herbicidas",
    imagen: "https://via.placeholder.com/150",
    descripcion: "Descripción del Producto 2",
  },
  {
    id: 3,
    nombre: "Insecticidas",
    imagen: "https://via.placeholder.com/150",
    descripcion: "Descripción del Producto 2",
  },
  {
    id: 4,
    nombre: "Fungicidas",
    imagen: "https://via.placeholder.com/150",
    descripcion: "Descripción del Producto 2",
  },
  {
    id: 4,
    nombre: "Coadyuvantes",
    imagen: "https://via.placeholder.com/150",
    descripcion: "Descripción del Producto 2",
  },
  {
    id: 4,
    nombre: "Fertilizantes",
    imagen: "https://via.placeholder.com/150",
    descripcion: "Descripción del Producto 2",
  },
];

const Productos = () => {
  const productosPorFila = 3;

  const gruposDeProductos = [];
  for (let i = 0; i < productosData.length; i += productosPorFila) {
    gruposDeProductos.push(productosData.slice(i, i + productosPorFila));
  }

  return (
    <div className="container-productos">
      <div className="background-productos"></div>
      <h2 className="titulo-productos">Nuestros Productos</h2>
      {gruposDeProductos.map((grupo, index) => (
        <div key={index} className="row">
          {grupo.map((producto) => (
            <div key={producto.id} className="col-md-3">
              <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.imagen} />
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>
          {producto.descripcion}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Productos;
