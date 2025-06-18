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
      <h3 className='medium-h lg:text-3xl md:text-2xl text-xl mb-10'>
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
      <section className='flex lg:flex-row lg:gap-4 flex-col items-center justify-evenly'>
        <Project
          title={projects.newsletter.title}
          description={projects.newsletter.description}
          imgSrc={projects.newsletter.imgSrc}
          link={projects.newsletter.link}
          github={projects.newsletter.github}
        />
        <div className='flex max-w-xl xl:w-xl lg:w-lg w-auto xl:max-h-fit border-3 border-cyan-500 rounded-md mb-4'>
          <div className='backgr-p'>
            <h3 className='medium-h lg:text-3xl md:text-2xl text-xl'>
              {projects.github.title}
            </h3>
            <p className='xl:text-xl md:text-lg sm:text-md'>
              {projects.github.description} Available{' '}
              <a
                href={projects.github.link}
                target='_blank'
                className='text-cyan-500'
              >
                here
              </a>
              .
            </p>
          </div>
          <img
            src={projects.github.imgSrc}
            className='lg:h-60 h-40 lg:block hidden'
          />
        </div>
      </section>
    </div>
  );
}
