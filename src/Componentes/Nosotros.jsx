
import "../CSS/Nosotros.css";
import Iframe from "react-iframe";

const Nosotros = () => {
  return (
    <section id="Nosotros" className="section">
    <div  className="container-lg ">
      <div className="row mt-5 p-5">
        <div className="col-6">
          <h2 className="titulo-nosotros">Nosotros</h2>
          <p className="texto-nosotros">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
            ornare libero. Sed ultricies justo eu augue varius, in varius massa
            ultrices. Vivamus laoreet euismod orci, nec laoreet eros congue id.
          </p>
        </div>
        <div className="col-6">
          <Iframe
            url="https://maps.google.com/maps?width=675&amp;height=496&amp;hl=en&amp;q=Exuvia agro SRL, Argentina&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="500px"
            height="500px"
            frameborder="0"
            position="relative"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          />
        </div>
      </div>
    </div>
    </section>
  );
};

export default Nosotros;