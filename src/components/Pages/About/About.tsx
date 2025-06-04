import type { PageProps } from "../../..";

export default function About({
  setTitle,
}: {
  setTitle: PageProps;
}): React.JSX.Element {
  setTitle("About");

  return (
    <>
      <h1>TOVA E ABOUT</h1>
    </>
  );
}
