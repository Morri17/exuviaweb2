import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/Contacto.css";
import ImagenContacto1 from "../assets/Imagenes/ExuviaAgro - Isotipo.png";

const Contacto = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (data) => {
    if (Object.keys(errors).length === 0) {
      // Si no hay errores, enviar el formulario
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const PUBLICKEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      emailjs.send(serviceID, templateID, data, PUBLICKEY)
        .then((result) => {
          console.log(result.text);
          setIsSuccess(true);
          reset(); // Limpiar el formulario después del envío exitoso
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 p-5">
        <form
        onSubmit={handleSubmit(sendEmail)}>
              <div className="row g-3 aling-items-center">
                <div className="col-6">
                  <div className="form-floating">
                    <input
                      type="name"
                      className="form-control"
                      id="user_name"
                      placeholder="lucas"
                      required
                      {...register("user_name", { required: "Este campo es requerido" })}
                    />
                      {errors.user_name && (
                  <div className="invalid-feedback">{errors.user_name.message}</div>
                )}
                    <label htmlFor="user_name">Nombre</label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="user_email"
                      placeholder="email"
                      autoComplete="none"
                      required
                    />
                    <label htmlFor="user_email">Email</label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-floating">
                    <input
                      type="number"
                      className="form-control"
                      id="user_number"
                      placeholder="number"
                      required
                    />
                    <label htmlFor="user_number">Telefono</label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="user_ciudad"
                      placeholder="ciudad"
                      required
                    />
                    <label htmlFor="user_ciudad">Ciudad</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Deje su comentario aquí"
                      id="user_mensaje"
                      required
                    ></textarea>
                    <label htmlFor="user_mensaje">Dejenos su comentario</label>
                  </div>
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-outline-secondary btn-lg mt-4"
                  >
                    Enviar consulta
                  </button>
                </div>
              </div>
            </form>
        </div>
        <div className="col-md-6 p-5 aling-items-center">
            <img src={ImagenContacto1} className="imagenContacto d-block w-50 aling-items-center" alt="" />
        </div>
        {isSuccess && (
                  <div className="alert alert-success mt-3" role="alert">
                    Consulta enviada correctamente. A la brevedad lo contactaremos.
                  </div>
                )}
      </div>
    </div>
  );
};

export default Contacto;
























/* const Contacto0 = () => {
    return (
      <div className="container-lg justify-content-lg-center mt-3 p-5">
        <div className="row g-3 align-items-center">
          <div className="col-12">
            <form>
              <div className="row">
                <div className="col-6">
                  <div className="form-floating">
                    <input
                      type="name"
                      className="form-control"
                      id="user_name"
                      placeholder="lucas"
                    />
                    <label htmlFor="user_name">Nombre</label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="user_email"
                      placeholder="email"
                      autoComplete="none"
                      required
                    />
                    <label htmlFor="user_email">Email</label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-floating">
                    <input
                      type="number"
                      className="form-control"
                      id="user_number"
                      placeholder="number"
                      required
                    />
                    <label htmlFor="user_number">Telefono</label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="user_ciudad"
                      placeholder="ciudad"
                      required
                    />
                    <label htmlFor="user_ciudad">Ciudad</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Deje su comentario aquí"
                      id="user_mensaje"
                      required
                    ></textarea>
                    <label htmlFor="user_mensaje">Dejenos su comentario</label>
                  </div>
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-outline-secondary btn-lg mt-4"
                  >
                    Enviar consulta
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contacto0;
  */