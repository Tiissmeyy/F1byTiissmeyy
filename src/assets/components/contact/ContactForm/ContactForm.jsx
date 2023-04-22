import { useForm } from "react-hook-form";
import style from "./ContactForm.module.css";

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  // const onSubmit = (data) => {
  //   data.preventDefault()
  //   emailjs.sendForm("service_88m4zrj", "template_syiegjl", e.target, "YOUR_USER_ID")
  //     .then((result) => {
  //       console.log(result.text);
  //     }, (error) => {
  //       console.log(error.text);
  //     });
  //   console.log(data);
  //   // Ici, vous pouvez envoyer les données du formulaire à votre serveur ou à un service tiers.
  // };

  return (
    <form onSubmit={handleSubmit(console.log("submit"))} className={`${style.form}`}>
      <div className={`${style.inputContainer}`}>
        <div className={`${style.inputLine}`}>
          <label htmlFor="firstName">Prénom</label>
          <input type="text" id="firstName" {...register("firstName", { required: true })} />
        </div>
        {errors.firstName && <span>Ce champ est obligatoire</span>}
      </div>

      <div className={`${style.inputContainer}`}>
        <div className={`${style.inputLine}`}>
          <label htmlFor="lastName">Nom</label>
          <input type="text" id="lastName" {...register("lastName", { required: true })} />
        </div>
        {errors.lastName && <span>Ce champ est obligatoire</span>}
      </div>

      <div className={`${style.inputContainer}`}>
        <div className={`${style.inputLine}`}>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" {...register("email", { required: true })} />  
        </div>
        {errors.email && <span>Ce champ est obligatoire et doit être une adresse e-mail valide</span>}
      </div>

      <div className={`${style.inputContainer}`}>
        <div className={`${style.inputLine}`}>
          <label htmlFor="message">Message</label>
          <textarea id="message" {...register("message", { required: true })} />  
        </div>
        {errors.message && <span>Ce champ est obligatoire</span>}
      </div>

      <button type="submit">Envoyer</button>
    </form>
  );
};

export default ContactForm;