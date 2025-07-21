import type { PageProps } from '../../..';
import { about } from '../../../store/about';
import AboutCard from './AboutCard';

export default function About({
  setTitle,
}: {
  setTitle: PageProps;
}): React.JSX.Element {
  setTitle('About');

  return (
    <div className='page-cont items-center lg:mx-32 md:mx-20 mx-10 lg:my-6 md:my-5 my-4'>
      <section className='lg:flex xl:gap-x-40 lg:gap-x-10'>
        <div className='mb-6 max-w-xl'>
          <h1 className='xl:text-5xl text-4xl font-bold text-cyan-500 mb-2'>
            Hey, nice to meet you!
          </h1>
          <p className='backgr-p'>
            My name's Viktor Kolev. I'm 2 years old and I'm from Aytos,
            Bulgaria, although I'm living in Sofia. My goal is to become a
            Front-End Developer, have fun while doing so, paint landscapes,
            listen to good music, eat tasty food, love and be loved.
          </p>
        </div>
        <div className='mb-6 max-w-xl'>
          <h1 className='xl:text-5xl text-4xl font-bold text-cyan-500 mb-2'>
            Is that all?
          </h1>
          <p className='backgr-p'>
            Well, no - not really. If you buy me a coffee{' '}
            {"(or a beer if you're brave enough)"} I'll probably talk your ear
            off. A summarized version of what you might hear is in the whole
            website but here you can find an interesting piece of my story.
          </p>
        </div>
      </section>
      <section className='flex flex-co mt-4'>
        <div className='flex gap-4 flex-col items-center justify-evenly'>
          {/* baby viktor image */}
          <AboutCard text={about.first.text} imgSrc={about.first.imgSrc} />
          {/* me in 2022-2023 */}
          <AboutCard text={about.second.text} imgSrc={about.second.imgSrc} />
          {/* me now */}
          <AboutCard text={about.third.text} imgSrc={about.third.imgSrc} />
        </div>
      </section>
    </div>
  );
}
