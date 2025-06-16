import type { PageProps } from "../../..";
import ContactForm from "./ContactForm";

export default function Contact({
  setTitle,
}: {
  setTitle: PageProps;
}): React.JSX.Element {
  setTitle("Contact");

  return (
    <div className="page-cont xl:mx-15 sm:mx-10">
      <ContactForm />
    </div>
  );
}
