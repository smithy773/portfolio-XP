import type { PageProps } from "../../..";

export default function Home({
  setTitle,
}: {
  setTitle: PageProps;
}): React.JSX.Element {
  setTitle("Viktor Kolev");

  return (
    <div className="mx-10 my-20">
      <h1 className="text-6xl font-bold">Hello there!</h1>
      <h3 className="text-3xl font-semibold">
        I'm Viktor - an aspiring Front-End Developer.
      </h3>
      <p>
        This website contains some interesting information about me both as a
        person and as a developer. If you think I'm a good fit for a job{" "}
        {"(anything web dev related)"} or simply want to get in contact with me
        for any reason at all, please do so at any time by going to the
        "Contact" page.
      </p>

      <p>Thank you for your time! Have a great day and stay safe! :{")"}</p>
    </div>
  );
}
