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
      return () => clearTimeout(redirectTimeout);
    }
  }, [isSuccess]);

  return (
    <section id="contacto" className="section">
      <div className="divmadre">
        <div className="texto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sunt
          veritatis hic quibusdam dolore earum ipsa debitis sequi ullam adipisci
          dignissimos, architecto harum tempore maxime incidunt voluptatum. Aut,
          earum neque. Ipsa nesciunt necessitatibus enim recusandae, quasi et
          quas commodi officia dolore mollitia quae labore hic nostrum similique
          laudantium nihil beatae voluptatibus? Illo odio cupiditate sint iusto
          porro dolore minus temporibus. Ut fuga recusaconseesse sint expedita,
          corrupti doloribus suscipit dolores eum architecto iusto corporis
          excepturi alias minima libero hic sit eos commodi distinctio dolorem
          harum culpa? Atque. Quos, maiores voluptatem! Cumque delectus
          exercitationem incidunt aa?
        </div>
        <div className="formulario">
          <div className="titulo"> PONETE EN COTACTO CON NOSOTROS</div>
          <form ref={form} onSubmit={handleSubmit(sendEmail)}>
            <label>Nombre:</label>
            <input
              type="text"
              name="user_name"
              {...register("user_name", { required: true })}
            />
            {errors.user_name && (
              <div className="text-danger">Debe completar su nombre</div>
            )}
            <label>Email:</label>
            <input
              type="email"
              name="user_email"
              {...register("user_email", { required: true })}
            />
            {errors.user_email && (
              <div className="text-danger">Debe completar su correo</div>
            )}
            <label>Telefono de contacto:</label>
            <input
              type="telefono"
              name="user_telefono"
              {...register("user_telefono", { required: true })}
            />
            {errors.user_telefono && (
              <div className="text-danger">
                Debe colocar un numero de contacto
              </div>
            )}

            <label>Dejanos tu consulta:</label>
            <textarea
              name="message"
              {...register("message", { required: true })}
            />
            {errors.message && (
              <div className="text-danger">
                Es necesario que escriba un mensaje
              </div>
            )}

            <input type="submit" value="ENVIAR" className="btn btn-primary" />

            {isSuccess && (
              <div>
                <div className="alert alert-success mt-3">
                  Consulta enviada correctamente. A la brevedad lo contactaremos
                </div>
                Sera redirigido a la pagina principal
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
