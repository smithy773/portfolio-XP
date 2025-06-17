import type { PageProps } from "../../..";

export default function Projects({
  setTitle,
}: {
  setTitle: PageProps;
}): React.JSX.Element {
  setTitle("Projects");

  return (
    <div className="page-cont lg:mx-32 md:mx-20 mx-10 lg:my-16 md:my-12 my-10">
      <h1 className="lg:text-6xl text-5xl font-bold">My work so far</h1>
      <h3 className="medium-h md:text-3xl">
        Here you can find all the best projects I've worked or am currently
        working on. Hope you like them!
      </h3>
      <section></section>
    </div>
  );
}
