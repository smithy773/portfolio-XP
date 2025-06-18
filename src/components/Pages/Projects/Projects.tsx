import type { PageProps } from '../../..';
import { projects } from '../../../store/projects';
import Project from './Project';

export default function Projects({
  setTitle,
}: {
  setTitle: PageProps;
}): React.JSX.Element {
  setTitle('Projects');

  return (
    <div className='page-cont lg:mx-20 md:mx-16 mx-10 lg:my-6 md:my-5 my-4'>
      <h1 className='xl:text-6xl lg:text-5xl sm:text-4xl text-3xl font-bold'>
        My work so far
      </h1>
      <h3 className='medium-h lg:text-3xl md:text-2xl text-xl mb-5'>
        Here you can find all the best projects I've worked or am currently
        working on. Hope you like them!
      </h3>
      <section className='flex lg:flex-row lg:gap-4 flex-col items-center justify-evenly'>
        <Project
          title={projects.hangman.title}
          description={projects.hangman.description}
          imgSrc={projects.hangman.imgSrc}
          link={projects.hangman.link}
          github={projects.hangman.github}
        />
        <Project
          title={projects.viaoutd.title}
          description={projects.viaoutd.description}
          imgSrc={projects.viaoutd.imgSrc}
          link={projects.viaoutd.link}
          github={projects.viaoutd.github}
        />
      </section>
    </div>
  );
}
