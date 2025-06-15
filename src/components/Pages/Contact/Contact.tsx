import type { PageProps } from "../../..";
import PageCont from "../PageCont/PageCont";
import ContactForm from "./ContactForm";

export default function Contact({
  setTitle,
}: {
  setTitle: PageProps;
}): React.JSX.Element {
  setTitle("Contact");

  return (
    <PageCont>
      <ContactForm />
    </PageCont>
  );
}
