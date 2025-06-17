import type { PageProps } from "../../..";

export default function About({
  setTitle,
}: {
  setTitle: PageProps;
}): React.JSX.Element {
  setTitle("About");

  return (
    <div className="page-cont gap-10 lg:mx-32 md:mx-20 mx-10 lg:my-16 md:my-12 my-10">
      <section className="lg:flex xl:gap-x-40 lg:gap-x-10">
        <div className="mb-6">
          <h1 className="xl:text-5xl text-4xl font-bold text-cyan-500 mb-2">
            Hey, nice to meet you!
          </h1>
          <p className="backgr-p">
            My name's Viktor Kolev. I'm 21 years old {"(turning 22 in July)"}{" "}
            and I'm from Aytos, Bulgaria, although I'm living in Sofia. My goal
            is to become a Front-End Developer, have fun while doing so, paint
            landscapes, listen to good music, eat tasty food, love and be loved.
          </p>
        </div>
        <div>
          <h1 className="xl:text-5xl text-4xl font-bold text-cyan-500 mb-2">
            Is that all?
          </h1>
          <p className="backgr-p">
            Well, no - not really. If you buy me a coffee{" "}
            {"(or a beer if you're brave enough)"} I'll probably talk your ear
            off. A summarized version of what you might hear is in the whole
            website but here you can find an interesting piece of my story.
          </p>
        </div>
      </section>
      <section>
        <p className="backgr-p">
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
        <p className="backgr-p">
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
        <p className="backgr-p">
          I saved up for year, got into Telerik Academy's Alpha JavaScript
          course, finished it and here I am now!
        </p>
      </section>
    </div>
  );
}
