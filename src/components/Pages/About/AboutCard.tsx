import type { CardType } from '../../../store/cards';

export default function AboutCard({
  text,
  imgSrc,
}: CardType): React.JSX.Element {
  return (
    <div className='sm:grid sm:grid-cols-3 xl:w-4xl lg:w-3xl sm:w-2xl w-auto xl:max-h-fit border-3 border-cyan-500 rounded-md mb-4'>
      <p className='backgr-p xl:text-xl md:text-lg sm:text-md sm:col-start-1 sm:col-end-3'>
        {text}
      </p>
      <img
        src={imgSrc}
        className='max-w-full h-auto object-contain sm:col-start-3 sm:col-end-4'
      />
    </div>
  );
}
