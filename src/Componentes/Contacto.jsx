import { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/Contacto.css";

const Contacto = () => {
  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });

  const { register, handleSubmit } = useForm();
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
    
    <div className="container col-8">
      <div className="background-contacto">
        <div className="col p-3 mr-3">
          <form
            className="row align-items-center g-2 mt-4 needs-validation"
            noValidate
            ref={form}
            onSubmit={handleSubmit(sendEmail)}
          >
            <div className="col-6 position-relative">
              <label name="user_name" className="form-label">
                Nombre:
              </label>
              <input
                type="text"
                className="form-control"
                name="user_name"
                placeholder="Complete su nombre"
                required
              />
              <div className="invalid-tooltip">
                Es necesario que complete su nombre
              </div>
            </div>
            <div className="col-6 position-relative">
              <label name="use_email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                name="user_email"
                placeholder="Complete su email"
                required
              />
              <div className="invalid-tooltip">
                Es necesario que coloque un email
              </div>
            </div>
            <div className="col-6 position-relative">
              <label name="user_number" className="form-label">
                Telefono:
              </label>
              <input
                type="number"
                className="form-control"
                name="user_number"
                placeholder="Número de contacto"
                required
              />
              <div className="invalid-tooltip">
                Debe colocar un numero de contacto, el mismo debe ser sin
                guiones.
              </div>
            </div>
            <div className="col-6 position-relative">
              <label name="user_ciudad" className="form-label">
                Ciudad:
              </label>
              <input
                type="text"
                className="form-control"
                name="user_ciudad"
                placeholder="Complete su ciudad"
                required
                {...register("user_ciudad", { required: true })}
              />
              <div className="invalid-tooltip">Coloque su ciudad</div>
            </div>
            <div className="col-12 position-relative">
              <label name="user_mensaje" className="form-label">
                Dejenos su comentario:
              </label>
              <textarea
                className="form-control"
                type="text"
                name="user_mensaje"
                id="mensjae"
                placeholder="Escriba su duda aquí, nos comuncaremos a la brevedad"
                required
              ></textarea>
              <div className="invalid-tooltip">Debe dejar su comentario</div>
            </div>
            <div className="col mt-4">
              <input
                type="submit"
                value="Enviar mensaje"
                className="btn btn-primary  mt-3 mb-2"
                required
              />
              {isSuccess && (
                <div
                  className="alert alert-success mt-3"
                  role="alert"
                  id="liveAlertBtn"
                >
                  Consulta enviada correctamente. A la brevedad lo
                  contactaremos.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
 
  );
};

export default Contacto;
