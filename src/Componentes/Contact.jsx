import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/Contact.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";


const Contact = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isSuccess, setIsSuccess] = useState(false);
  
    const sendEmail = (data) => {
      if (Object.keys(errors).length === 0) {
        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLICKEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  
        emailjs.send(serviceID, templateID, data, PUBLICKEY)
          .then((result) => {
            console.log(result.text);
            setIsSuccess(true);
            reset();
          })
          .catch((error) => {
            console.error(error);
          });
      }
    };


  return (
    <div>
      <div className="form-area">
        <div className="container">
          <div className="row single-form g-0">
            <div className="col-sm-12 col-lg-6">
              <div className="left">
                <h1>Exuvia Agro</h1>
                <h2>
                  <span>Sebramos confianza</span>
                </h2>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6">
              
              <div className="right">
                <div className="input-box">
                  <header>Dejanos tus datos y nos pondremos en contacto</header>
                  <div className="input-field">
                    <input
                      type="text"
                      className="input"
                      id="email"
                      required
                      autoComplete="off"
                    />
                    <label htmlFor="email">Nombre</label>
                  </div>

                  <div className="input-field">
                    <input
                      type="text"
                      className="input"
                      id="email"
                      required
                      autoComplete="off"
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="input-field">
                    <input
                      type="number"
                      className="input"
                      id="number"
                      required
                      autoComplete="off"
                    />
                    <label htmlFor="email">Telefono</label>
                  </div>

                  <div className="input-field">
                    <input type="submit" className="submit" value="Enviar" onSubmit={handleSubmit(sendEmail)}   />
                  </div>

                  <div className="signin">
                    <span>Nos pondremos en contacto a la brevedad.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
