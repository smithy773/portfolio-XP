import type { PageProps } from "../../..";
// import Three from "../../Three/Three";

export default function Home({
  setTitle,
}: {
  setTitle: PageProps;
}): React.JSX.Element {
  setTitle("Viktor Kolev");

  return (
    <>
      <h1>TOVA E HOME</h1>
    </>
  );
}
