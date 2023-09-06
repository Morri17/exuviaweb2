import { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/Contacto.css";

const Contacto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);
  const form = useRef();

  const sendEmail = () => {
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLICKEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceID, templateID, form.current, PUBLICKEY).then(
      (result) => {
        console.log(result.text);
        setIsSuccess(true);
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  useEffect(() => {
    if (isSuccess) {
      const redirectTimeout = setTimeout(() => {
        window.location.href = "http://localhost:5173/inicio";
      }, 4000);
      return () =>  clearTimeout(redirectTimeout);
    }
  }, [isSuccess]);

  return (
    <div className="background-contacto">
      <div className="col-6 p-3 mr-3">
        <form
          className="row align-items-center g-2 mt-4"
          ref={form}
          onSubmit={handleSubmit(sendEmail)}
        >
          <div className="col-6">
            <label name="use_name" className="form-label">
              Nombre:
            </label>
            <input
              type="text"
              className="form-control"
              name="user_name"
              placeholder="Complete su nombre"
            />
            {errors.user_name && (
              <div className="text-danger">Debe completar su nombre</div>
            )}
          </div>
          <div className="col-6">
            <label name="use_email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              name="user_name"
              placeholder="Complete su email"
            />
            {errors.user_email && (
              <div className="text-danger">Debe completar su correo</div>
            )}
          </div>
          <div className="col-6">
            <label name="user_number" className="form-label">
              Telefono:
            </label>
            <input
              type="number"
              className="form-control"
              name="user_number"
              placeholder="Número de contacto"
              {...register("user_telefono", { required: true })}
            />
          </div>
          <div className="col-6">
            <label name="user_ciudad" className="form-label">
              Ciudad:
            </label>
            <input
              type="text"
              className="form-control"
              name="user_telefono"
              placeholder="Complete su ciudad"
              {...register("user_ciudad", { required: true })}
            />
          </div>
          <div className="col-12">
            <label name="use_mensaje" className="form-label">
              Dejenos su comentario:
            </label>
            <textarea
              className="form-control"
              type="text"
              name="mensaje"
              id="mensjae"
              placeholder="Escriba su mensaje aqui"
            ></textarea>
            {errors.mensaje && (
              <div className="text-danger">
                Es necesario que escriba un mensaje
              </div>
            )}
          </div>
          <div className="col mt-4">
            <input
              type="submit"
              value="Enviar mensaje"
              className="btn btn-primary btn-lg mb-4"
            />
            {isSuccess && (
              <div
                className="alert alert-success mt-3"
                role="alert"
                id="liveAlertBtn"
              >
                Consulta enviada correctamente. A la brevedad lo contactaremos.
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
