import { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";

const Contacto2 = () => {
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
      return () => clearTimeout(redirectTimeout);
    }
  }, [isSuccess]);

  return (
    <div className="container-lg">
      <form className="row" ref={form} onSubmit={handleSubmit(sendEmail)}>
        <div className="col-4">
          <label name="use_name" className=""></label>
          <input
            type="text"
            className="form-control"
            name="user_name"
            placeholder="Nombre"
          />
          {errors.user_name && (
            <div className="text-danger">Debe completar su nombre</div>
          )}
        </div>
        <div className="col-4">
          <label name="use_email" className=""></label>
          <input
            type="email"
            className="form-control"
            name="user_name"
            placeholder="Email"
          />
          {errors.user_email && (
            <div className="text-danger">Debe completar su correo</div>
          )}
        </div>
        <div className="col-4">
          <label name="use_email" className=""></label>
          <input
            type="telefono"
            className="form-control"
            name="user_telefono"
            placeholder="Número de contacto"
            {...register("user_telefono", { required: true })}
          />
        </div>
        <div className="col-12">
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
        <input type="submit" value="ENVIAR" className="btn btn-primary" />

        {isSuccess && (
          <div className="form-control">
            <div className="alert alert-success mt-3">
              Consulta enviada correctamente. A la brevedad lo contactaremos
            </div>
            Sera redirigido a la pagina principal
          </div>
        )}
      </form>
    </div>
  );
};

export default Contacto2;
