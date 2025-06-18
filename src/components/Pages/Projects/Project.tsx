import type { ProjectProps } from "../../../store/projects";

export default function Project({
  title,
  description,
  imgSrc,
  link,
  github,
}: ProjectProps): React.JSX.Element {
  return (
    <div className="flex max-w-xl xl:w-xl lg:w-lg w-auto xl:max-h-fit border-3 border-cyan-500 rounded-md mb-4">
      <div className="backgr-p">
        <h3 className="medium-h lg:text-3xl md:text-2xl text-xl">{title}</h3>
        <p className="xl:text-xl md:text-lg sm:text-md">{description}</p>
        <p className="xl:text-xl md:text-lg sm:text-md">
          Available{" "}
          <a href={link} target="_blank" className="text-cyan-500">
            here
          </a>
          . More information on{" "}
          <a href={github} target="_blank" className="text-cyan-500">
            GitHub
          </a>
          .
        </p>
      </div>
      <img src={imgSrc} className="lg:h-60 h-40 lg:block hidden" />
    </div>
  );
}
