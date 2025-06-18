import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "../../../store/enums";
import type { ShowModalFN, SuccessFN } from "../../..";

export default function ContactForm({
  setShowModal,
  setSuccess,
}: {
  setShowModal: ShowModalFN;
  setSuccess: SuccessFN;
}) {
  // @ts-ignore
  const form = useRef<HTMLFormElement>();
  const sendEmail = (e: React.SyntheticEvent) => {
    e.preventDefault();

    // @ts-ignore
    let name = form.current.querySelector("#name").value;
    // @ts-ignore
    let email = form.current.querySelector("#email").value;
    // @ts-ignore
    let message = form.current.querySelector("#message").value;

    console.log(name, typeof name, name.length);

    if (name.length < 1 || email.length < 1 || message.length < 1) {
      setShowModal(true);
      return;
    }

    let templateParams = {
      name,
      email,
      message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          // @ts-ignore
          form.current.querySelector("#name").value = "";
          // @ts-ignore
          form.current.querySelector("#email").value = "";
          // @ts-ignore
          form.current.querySelector("#message").value = "";
          setSuccess(true);
          setShowModal(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form
      className="flex flex-col items-center gap-8 md:border-4 border-3 rounded-md border-cyan-500 p-8 m-auto z-0"
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
        className="btn font-bold px-3 py-1 outline-3 text-3xl"
        type="submit"
        value="Send"
      />
    </form>
  );
}
