import type { PageProps } from "../../..";
import MediumHeading from "../../Heading/MediumHeading";
import PageCont from "../PageCont/PageCont";

export default function Projects({
  setTitle,
}: {
  setTitle: PageProps;
}): React.JSX.Element {
  setTitle("Projects");

  return (
    <PageCont>
      <h1 className="lg:text-6xl text-5xl font-bold">My work so far</h1>
      <MediumHeading className="">
        Here you can find all the best projects I've worked or am currently
        working on. Hope you like them!
      </MediumHeading>
      <section></section>
    </PageCont>
  );
}
