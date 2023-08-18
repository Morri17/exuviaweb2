
import "../CSS/Nosotros.css";
import Iframe from "react-iframe";

const Nosotros = () => {
  return (
    <div className="container nosotros-container">
      <div className="row">
        <div className="col-md-6">
          <h2>Nosotros</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
            ornare libero. Sed ultricies justo eu augue varius, in varius massa
            ultrices. Vivamus laoreet euismod orci, nec laoreet eros congue id.
          </p>
        </div>
        <div className="col-md-2">
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
  );
};

export default Nosotros;