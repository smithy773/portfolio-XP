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
    <>
      <h3>What are you doing here?</h3>
      <a onClick={() => navigate(-1)}>Back</a>
    </>
  );
}
