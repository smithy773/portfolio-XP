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
    <div className='page-cont lg:mx-32 md:mx-20 mx-10 lg:my-16 md:my-12 my-10'>
      <h1 className='lg:text-6xl text-5xl font-bold'>My work so far</h1>
      <h3 className='medium-h md:text-3xl'>
        Here you can find all the best projects I've worked or am currently
        working on. Hope you like them!
      </h3>
      <section>
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
