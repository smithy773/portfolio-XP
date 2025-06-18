import type { PageProps } from "../../..";
import Modal from "../../Modal/Modal";
import ContactForm from "./ContactForm";
import { useState } from "react";

export default function Contact({
  setTitle,
}: {
  setTitle: PageProps;
}): React.JSX.Element {
  setTitle("Contact");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  return (
    <div className="page-cont items-center gap-4 xl:mx-15 mx-10 lg:my-6 md:my-5 my-4">
      <div>
        <h1 className="xl:text-6xl lg:text-5xl sm:text-4xl text-2xl font-bold mb-0.5">
          Want to get in touch?
        </h1>
        <h3 className="medium-h md:text-3xl sm:text-xl">
          Just fill out the form below to send me an email! I will contact you
          as soon as possible :{")"}
        </h3>
      </div>
      {showModal ? (
        <Modal setShowModal={setShowModal} success={success} />
      ) : (
        <ContactForm setShowModal={setShowModal} setSuccess={setSuccess} />
      )}
    </div>
  );
}
