import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "../../../store/enums";

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
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
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
    <form
      className="flex flex-col items-center gap-8 border-2 rounded-md border-cyan-500 p-8 m-auto"
      ref={form}
      onSubmit={sendEmail}
    >
      <div className="grid sm:grid-cols-2 grid-cols-1 sm:grid-rows-4 grid-rows-5 items-center gap-5">
        <div className="form-div">
          <label>Name</label>
          <input className="backgr-p" type="text" id="name" name="user_name" />
        </div>
        <div className="form-div">
          <label>Email</label>
          <input
            className="backgr-p"
            type="email"
            name="user_email"
            id="email"
          />
        </div>
        <div className="text-lg form-div h-full w-full sm:col-start-1 sm:col-end-3 sm:row-start-2 row-start-3 row-end-6">
          <label>Message</label>
          <textarea
            className="backgr-p w-full h-full"
            name="message"
            id="message"
          />
        </div>
      </div>
      <input
        className="outline-cyan-500 outline-3 rounded px-3 py-1 hover:bg-cyan-500 transition-all hover:cursor-pointer text-3xl"
        type="submit"
        value="Send"
      />
    </form>
  );
}
