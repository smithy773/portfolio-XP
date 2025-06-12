import type { PageProps } from "../../..";
import PageCont from "../PageCont/PageCont";

export default function Projects({
  setTitle,
}: {
  setTitle: PageProps;
}): React.JSX.Element {
  setTitle("Projects");

  return (
    <PageCont>
      <h1>TOVA E PROJECTS</h1>
    </PageCont>
  );
}
