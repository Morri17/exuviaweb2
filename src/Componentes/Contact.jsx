import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/Contact.css";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";

// tengo que ver el tema del redirect al home y verificar el mail.
const Contact = () => {
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const sendEmail = (data) => {
    if (Object.keys(errors).length === 0) {
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const PUBLICKEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      emailjs
        .send(serviceID, templateID, data, PUBLICKEY)
        .then((result) => {
          console.log(result.text);
          setTimeout(() => {
            setMostrarAlerta(true);
            reset();
          }, 3000);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div id="Contact">
      <form onSubmit={handleSubmit(sendEmail)}>
        <div className="form-area bg-secondary bg-gradient">
          <div className="container">
            <div className="row single-form g-0">
              <div className="col-sm-12 col-lg-6">
                <div className="left">
                  <h1>Exuvia Agro</h1>
                  <h2>
                    <span>Sembramos confianza</span>
                  </h2>
                </div>
              </div>
              <div className="col-sm-12 col-lg-6">
                <div className="right">
                  <div className="input-box">
                    <header>
                      Dejanos tus datos y nos pondremos en contacto
                    </header>
                    <div className="input-field">
                      <input
                        type="text"
                        className="input"
                        id="user_name"
                        required
                        autoComplete="off"
                        {...register("user_name", {
                          required: "Este campo es requerido",
                        })}
                      />
                      <label>Nombre</label>
                    </div>

                    <div className="input-field">
                      <input
                        type="text"
                        className="input"
                        id="user_email"
                        required
                        autoComplete="off"
                        {...register("user_email", {
                          required: "Este campo es requerido",
                        })}
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field">
                      <input
                        type="tel"
                        className="input"
                        id="user_number"
                        required
                        autoComplete="off"
                        {...register("user_number", {
                          required: "Este campo es requerido",
                        })}
                      />
                      <label htmlFor="tel">Telefono</label>
                    </div>

                    <div className="input-field">
                      <input
                        type="submit"
                        className="submit"
                        value="Enviar"
                        onSubmit={handleSubmit(sendEmail)}
                      />
                    </div>
                    {mostrarAlerta && (
                      <div className="alert alert-success mt-3" role="alert">
                        Su mensaje ha sido enviado correctamente
                      </div>
                    )}
                    <div className="signin">
                      <span>Nos pondremos en contacto a la brevedad.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Contact;
