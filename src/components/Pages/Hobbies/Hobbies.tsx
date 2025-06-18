import type { PageProps } from '../../..';
import { hobbies } from '../../../store/cards';
import Card from '../../Card/Card';

export default function Hobbies({
  setTitle,
}: {
  setTitle: PageProps;
}): React.JSX.Element {
  setTitle('Hobbies');

  return (
    <div className='page-cont lg:mx-20 md:mx-16 mx-10 lg:my-6 md:my-5 my-4'>
      <h1 className='xl:text-6xl lg:text-5xl sm:text-4xl text-3xl font-bold'>
        What's a person without hobbies?
      </h1>
      <h3 className='medium-h lg:text-3xl md:text-2xl text-xl'>
        You might say a "professional" or very "busy" person - I say "boring"!
        Hobbies and interests are what makes us unique. Without them, life's
        only about eating and doing the thing that comes after eating. Here's
        what makes me interesting:
      </h3>
      <section className='flex flex-col mt-10'>
        <section className='flex lg:flex-row lg:gap-4 flex-col items-center justify-evenly'>
          {/* Concert */}
          <Card text={hobbies.music.text} imgSrc={hobbies.music.imgSrc} />
          {/* Painting */}
          <Card text={hobbies.painting.text} imgSrc={hobbies.painting.imgSrc} />
        </section>
        <section className='flex lg:flex-row lg:gap-4 flex-col items-center justify-evenly'>
          {/* Hiking */}
          <Card text={hobbies.hiking.text} imgSrc={hobbies.hiking.imgSrc} />
          {/* Gaming */}
          <Card text={hobbies.gaming.text} imgSrc={hobbies.gaming.imgSrc} />
        </section>
      </section>
    </div>
  );
}
