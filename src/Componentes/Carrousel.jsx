import imagen1 from "../assets/Imagenes/Imagen6.jpg";

const Carrousel = () => {
  return (
    <div className="container aling-items-center justify-content-center text-center">
      <div className="row p-4">
        <div className="col-12">
          <h1>Nuestros prodcutos</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="card mb-4">
            <img src={imagen1} className="card-img-top" alt="Prducto..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-6">
        <div className="card mb-4">
            <img src={imagen1} className="card-img-top" alt="Prducto..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-6">
        <div className="card mb-4">
            <img src={imagen1} className="card-img-top" alt="Prducto..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-6">
        <div className="card mb-4">
            <img src={imagen1} className="card-img-top" alt="Prducto..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
