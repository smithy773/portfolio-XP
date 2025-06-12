import type { PageProps } from "../../..";
import PageCont from "../PageCont/PageCont";

export default function About({
  setTitle,
}: {
  setTitle: PageProps;
}): React.JSX.Element {
  setTitle("About");

  return (
    <PageCont className="gap-10">
      <section className="grid grid-cols-2 grid-rows-2 gap-x-100">
        {/* Heading + paragraph below it */}
        <h3 className="text-4xl text-cyan-500 col-start-1 row-start-1">
          Hey, nice to meet you!
        </h3>
        <p className="col-start-1 row-start-2">
          My name's Viktor Kolev. I'm 21 years old {"(turning 22 in July)"} and
          I'm from Aytos, Bulgaria, although I'm living in Sofia. My goal is to
          become a Front-End Developer, have fun while doing so, paint
          landscapes, listen to good music, eat tasty food, love and be loved.
        </p>

        {/* Heading + paragraph below it */}
        <h3 className="text-4xl text-cyan-500">Is that all?</h3>
        <p>
          Well, no - not really. If you buy me a coffee{" "}
          {"(or a beer if you're brave enough)"} I'll probably talk your ear
          off. A summarized version of what you might hear is in the whole
          website but here's an interesting piece:
        </p>
      </section>
      <section>
        <p>
          {/* baby viktor image */}
          Why Front-End Development? Pretty much my whole life has been spent
          drawing, playing video games, watching TV Shows and having fun with
          friends - all in front of the family computer and later on - my own
          one! I'm comfortable using pretty much everything a typical PC has to
          offer, so I know what users might want in their apps / websites {":)"}
          .
        </p>
      </section>
      <section>
        <p>
          Knowing this, my family tried pushing me into IT studies from a young
          age, however I never tried anything IT related until I decided to drop
          out of Journalism at Sofia University. Having done so, I set my sights
          on Front-End Development as a start, but ended up falling in love with
          it in the process of learning.
        </p>
        {/* me in 2022-2023 */}
      </section>
      <section>
        {/* me now */}
        <p>
          I saved up for year, got into Telerik Academy's Alpha JavaScript
          course, finished it and here I am now!
        </p>
      </section>
    </PageCont>
  );
}
