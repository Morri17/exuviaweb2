import imagen1 from "../assets/Imagenes/Imagen6.jpg";

const Carrousel = () => {
  return (
    <div className="container aling-items-center justify-content-center text-center">
      <div className="row p-4">
        <div className="col-12">
          <h1>Nuestros prodcutos</h1>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-lg-4">
          <div className="card mb-4">
            <img src={imagen1} className="card-img-top" alt="Prducto..." />
            <div className="card-body">
              <h5 className="card-title">Semillas</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card mb-4">
            <img src={imagen1} className="card-img-top" alt="Prducto..." />
            <div className="card-body">
              <h5 className="card-title">Herbicidas</h5>
              <p className="card-text">
                Le acercamos un mix de herbicidas de máxima eficacia y excelente
                relación costo/beneficio. Para proteger sus cultivos y su
                inversión haciendo que sus decisiones se vuelvan todavía más
                rentables.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card mb-4">
            <img src={imagen1} className="card-img-top" alt="Prducto..." />
            <div className="card-body">
              <h5 className="card-title">Fungicidas</h5>
              <p className="card-text">
                Le acercamos un mix de fungicidas de máxima eficacia y excelente
                relación costo/beneficio. Para proteger sus cultivos y su
                inversión haciendo que sus decisiones se vuelvan todavía más
                rentables.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card mb-4">
            <img src={imagen1} className="card-img-top" alt="Prducto..." />
            <div className="card-body">
              <h5 className="card-title">Insecticidas</h5>
              <p className="card-text">
                Le acercamos un mix de insecticidas de máxima eficacia y
                excelente relación costo/beneficio. Para proteger sus cultivos y
                su inversión haciendo que sus decisiones se vuelvan todavía más
                rentables.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card mb-4">
            <img src={imagen1} className="card-img-top" alt="Prducto..." />
            <div className="card-body">
              <h5 className="card-title">Coadyuvantes</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card mb-4">
            <img src={imagen1} className="card-img-top" alt="Prducto..." />
            <div className="card-body">
              <h5 className="card-title">Fertilizantes</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
