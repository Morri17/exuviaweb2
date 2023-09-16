import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/Contacto.css";

const Contacto = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();


  const sendEmail = (data) => {
    if (Object.keys(errors).length === 0) {
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const PUBLICKEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      emailjs.send(serviceID, templateID, data, PUBLICKEY)
        .then((result) => {
          console.log(result.text);
          
          reset();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className="container">
      <div className="container p-5">
        Complete el siguiente formulario y nos pondremos en contacto con usted a la brevedad.
      </div>
      <div className="row mt-4">
        <div className="background-contacto">
          <div className="col p-3 mr-3">
            <form
              className="row align-items-center g-1 mt-1"
              onSubmit={handleSubmit(sendEmail)}
            >
              <div className="col-6 position-relative">
                <label htmlFor="user_name" className="form-label">
                  Nombre:
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.user_name ? "is-invalid" : "555555555"}`}
                  id="user_name"
                  {...register("user_name", { required: "Este campo es requerido" })}
                />
                {errors.user_name && (
                  <div className="invalid-feedback">{errors.user_name.message}</div>
                )}
              </div>
              {/* Resto del formulario */}
              {/* ... */}
              <div className="col mt-2">
                <input
                  type="submit"
                  value="Enviar mensaje"
                  className="btn btn-primary mt-3 mb-2"
                />
                {isSuccess && (
                  <div className="alert alert-success mt-3" role="alert">
                    Consulta enviada correctamente. A la brevedad lo contactaremos.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
