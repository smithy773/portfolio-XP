import type { PageProps } from "../../..";

export default function Projects({
  setTitle,
}: {
  setTitle: PageProps;
}): React.JSX.Element {
  setTitle("Projects");

  return (
    <>
      <h1>TOVA E PROJECTS</h1>
    </>
  );
}
