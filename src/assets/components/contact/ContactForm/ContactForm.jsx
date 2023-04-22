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
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" {...register("firstName", { required: true })} />
        </div>
        {errors.firstName && <span>This field is required</span>}
      </div>

      <div className={`${style.inputContainer}`}>
        <div className={`${style.inputLine}`}>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" {...register("lastName", { required: true })} />
        </div>
        {errors.lastName && <span>This field is required</span>}
      </div>

      <div className={`${style.inputContainer}`}>
        <div className={`${style.inputLine}`}>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" {...register("email", { required: true })} />  
        </div>
        {errors.email && <span>This field is required and must be a valid email address</span>}
      </div>

      <div className={`${style.inputContainer}`}>
        <div className={`${style.inputLine}`}>
          <label htmlFor="message">Message</label>
          <textarea id="message" {...register("message", { required: true })} />  
        </div>
        {errors.message && <span>This field is required</span>}
      </div>

      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;