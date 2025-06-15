import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  // @ts-ignore
  const form = useRef<HTMLFormElement>();

  const sendEmail = (e: React.SyntheticEvent) => {
    e.preventDefault();

    let templateParams = {
      // @ts-ignore
      name: form.current.querySelector("#name").value,
      // @ts-ignore
      email: form.current.querySelector("#email").value,
      // @ts-ignore
      message: form.current.querySelector("#message").value,
    };

    emailjs
      .send("service_g2e1bkt", "template_g5lkrax", templateParams, {
        publicKey: "7Hmud7QnYWYG4CcBD",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" id="name" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" id="email" />
      <label>Message</label>
      <textarea name="message" id="message" />
      <input type="submit" value="Send" />
    </form>
  );
}
