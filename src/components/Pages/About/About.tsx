import type { PageProps } from "../../..";

export default function About({
  setTitle,
}: {
  setTitle: PageProps;
}): React.JSX.Element {
  setTitle("About");

  return (
    <div>
      {/* Heading + paragraph below it */}
      <h1>Hey, nice to meet you!</h1>
      <p>
        My name's Viktor Kolev. I'm 21 years old {"(turning 22 in July)"} and
        I'm from Aytos, Bulgaria, although I'm living in Sofia. My goal is to
        become a Front-End Developer, have fun while doing so, paint landscapes,
        listen to good music, eat tasty food, love and be loved.
      </p>
      {/* Heading + paragraph below it */}
      <h3>Is that all?</h3>
      <p>
        Well, no - not really. If you buy me a coffee{" "}
        {"(or a beer if you're brave enough)"} I'll probably talk your ear off.
        A summarized version of what you might hear:
      </p>
      <section>
        <p>
          {/* baby viktor image */}
          Why Front-End Development? Pretty much my whole life has been spent
          drawing, playing video games, watching TV Shows and having fun with
          friends - all in front of the family computer and later on - my own
          one! I'm comfortable using pretty much everything a typical PC has to
          offer, so I know what users might want in their apps / websites {":)"}
          . Knowing this, my family tried pushing me into IT studies from a
          young age, however I never tried anything IT related until I decided
          to drop out of Journalism at Sofia University. Having done so, I set
          my sights on Front-End Development as a start, but ended up falling in
          love with it in the process of learning. I saved up for year, got into
          Telerik Academy's Alpha JavaScript course and here I am now!
        </p>
      </section>
      <section>
        <p>
          I LOVE music - especially rock music. Top artists would be Queens of
          the Stone Age, DOWN, The Smashing Pumpkins, Led Zeppelin and Black
          Sabbath.
        </p>
        {/* concert collage or click image to open a carousel */}
      </section>
      <section>
        {/* paintings collage or click image to open a carousel */}
        <p>
          I've mentioned drawing and painting - here it is! While I'm not a
          great artist, I still love painting my silly landscapes, even if they
          are not all that good. I'm proud of them and that will show in a
          future project I'm working on {";)"}
        </p>
      </section>
      <section>
        <p>
          In my opinion, the best place a person can be is the woods. Or in the
          rolling plains. Or the sea, mountains - ok, to put it simply, just
          walk until you can't see the city or any city for that matter. That's
          where a person ought to be.
        </p>
        {/* outdoors collage or click image to open a carousel */}
      </section>
      <section>
        {/* games collage or click image to open a carousel */}
        <p>
          I also mentioned games... No other way to go about it - I'm a geek and
          I love Magic: The Gathering, Warhammer 40,000, Settlers of Catan and
          other boardgames. As for video games, I've played them since I was
          three years old. They're pretty much as part of me as the breath I
          take. My favorites are Resident Evil, Singularity, Team Fortress 2,
          Firewatch, Cyberpunk 2077 and many, many more that will take too much
          space to list through.
        </p>
      </section>
    </div>
  );
}
