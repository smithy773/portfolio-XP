import type { PageProps } from "../../..";
import MediumHeading from "../../Heading/MediumHeading";
import PageCont from "../PageCont/PageCont";

export default function Hobbies({
  setTitle,
}: {
  setTitle: PageProps;
}): React.JSX.Element {
  setTitle("Hobbies");

  return (
    <PageCont>
      <h1 className="lg:text-6xl sm:text-4xl text-3xl font-bold">
        What's a person without hobbies?
      </h1>
      <MediumHeading>
        You might say a "professional" or very "busy" person - I say "boring"!
        Hobbies and interests are what makes us unique. Without them, life's
        only about eating and doing the thing that comes after eating. Here's
        what makes me interesting:
      </MediumHeading>
      <section className="flex flex-col gap-10 mt-5">
        <section>
          <p className="backgr-p">
            I LOVE music - especially rock music. Top artists would be Queens of
            the Stone Age, DOWN, The Smashing Pumpkins, Led Zeppelin and Black
            Sabbath.
          </p>
          {/* concert collage or click image to open a carousel */}
        </section>
        <section>
          {/* paintings collage or click image to open a carousel */}
          <p className="backgr-p">
            I've mentioned drawing and painting - here it is! While I'm not a
            great artist, I still love painting my silly landscapes, even if
            they are not all that good. I'm proud of them and that will show in
            a future project I'm working on {";)"}
          </p>
        </section>
        <section>
          <p className="backgr-p">
            In my opinion, the best place a person can be is the woods. Or in
            the rolling plains. Or the sea, mountains - ok, to put it simply,
            just walk until you can't see the city or any city for that matter.
            That's where a person ought to be.
          </p>
          {/* outdoors collage or click image to open a carousel */}
        </section>
        <section>
          {/* games collage or click image to open a carousel */}
          <p className="backgr-p">
            I also mentioned games... No other way to go about it - I'm a geek
            and I love Magic: The Gathering, Warhammer 40,000, Settlers of Catan
            and other boardgames. As for video games, I've played them since I
            was three years old. They're pretty much as part of me as the breath
            I take. My favorites are Resident Evil, Singularity, Team Fortress
            2, Firewatch, Cyberpunk 2077 and many, many more that will take too
            much space to list through.
          </p>
        </section>
      </section>
    </PageCont>
  );
}
