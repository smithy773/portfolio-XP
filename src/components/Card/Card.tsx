import type { CardType } from '../../store/cards';

export default function Card({ text, imgSrc }: CardType) {
  return (
    <div className='flex max-w-xl xl:w-xl lg:w-lg w-sm xl:max-h-fit border-3 border-cyan-500 rounded-md mb-4'>
      <p className='backgr-p xl:text-xl md:text-lg sm:text-md'>{text}</p>
      <img src={imgSrc} className='lg:h-60 h-40 lg:block hidden' />
    </div>
  );
}
