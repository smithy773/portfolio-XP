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
      <h1>Hello there!</h1>
      <p>
        My name is Viktor and I'm an aspiring Front-End Developer. My interests
        are vast and I'm always excited to pursue them. I hope you like what you
        see or at least have a laugh at some of my witty remarks :P
      </p>
    </>
  );
}
