import type { PageProps } from "../../..";

export default function Hobbies({
  setTitle,
}: {
  setTitle: PageProps;
}): React.JSX.Element {
  setTitle("Hobbies");

  return (
    <>
      <h1>TOVA E HOBBIES</h1>
    </>
  );
}
