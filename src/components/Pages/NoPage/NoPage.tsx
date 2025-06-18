import { useNavigate } from "react-router";
import type { PageProps } from "../../..";

export default function NoPage({
  setTitle,
}: {
  setTitle: PageProps;
}): React.JSX.Element {
  setTitle("Page not found");

  const navigate = useNavigate();

  return (
    <div className="page-cont items-center gap-4 mx-auto lg:my-6 md:my-5 my-4">
      <h3 className="xl:text-5xl text-4xl font-bold text-cyan-500 mb-2">
        What are you doing here?
      </h3>
      <a
        className="btn text-2xl font-semibold px-4 py-1"
        onClick={() => navigate(-1)}
      >
        Back
      </a>
    </div>
  );
}
