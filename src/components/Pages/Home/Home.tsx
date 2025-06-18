import { NavLink } from 'react-router';
import type { PageProps } from '../../..';

export default function Home({
  setTitle,
}: {
  setTitle: PageProps;
}): React.JSX.Element {
  setTitle('Viktor Kolev');

  return (
    <div className='page-cont  lg:mx-32 md:mx-20 sm:mx-10 lg:my-16 md:my-12 my-10'>
      <main className='flex lg:flex-row flex-col justify-center items-center gap-10 sm:mx-20 mx-8 mb-15'>
        <div className='max-w-xl'>
          <h1 className='lg:text-6xl text-4xl font-bold mb-0.5'>
            Hello there!
          </h1>
          <h3 className='medium-h md:text-3xl text-2xl mb-2'>
            I'm Viktor - an aspiring Front-End Developer.
          </h3>
          <p className='sm:text-xl text-md'>
            This website contains some interesting information about me - both
            as a person and as a developer. If you think I'm a good fit for a
            job {'(anything web dev related)'} or simply want to get in contact
            with me for any reason at all, please do so at any time by going to
            the{' '}
            {
              <NavLink to={'/contact'} className='text-cyan-500'>
                Contact
              </NavLink>
            }{' '}
            page.
          </p>
        </div>
        <img
          src='/imgs/me.JPG'
          className='rounded-md max-w-full h-auto object-contain border-cyan-500 border-3 shadow-lg'
        />
      </main>
      <p className='md:text-2xl text-xl text-center'>
        Thank you for your time! Have a great day and stay safe! :{')'}
      </p>
    </div>
  );
}
