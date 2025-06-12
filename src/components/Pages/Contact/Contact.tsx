import type { PageProps } from "../../..";
import PageCont from "../PageCont/PageCont";

export default function Contact({
  setTitle,
}: {
  setTitle: PageProps;
}): React.JSX.Element {
  setTitle("Contact");

  return (
    <PageCont>
      <h1>EMAIL CONTACT THINGIE</h1>
    </PageCont>
  );
}
