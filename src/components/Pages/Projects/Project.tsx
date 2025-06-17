import type { ProjectProps } from '../../../store/projects';

export default function Project({
  title,
  description,
  imgSrc,
  link,
  github,
}: ProjectProps): React.JSX.Element {
  return (
    <div className=''>
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={imgSrc} className='w-max h-max' />
      <p>
        Available{' '}
        <a href={link} target='_blank' className='text-cyan-500'>
          here
        </a>
        . More information on{' '}
        <a href={github} target='_blank' className='text-cyan-500'>
          GitHub
        </a>
        .
      </p>
    </div>
  );
}
