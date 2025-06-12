import { NavLink } from "react-router";
import type { PageProps } from "../../..";
import PageCont from "../PageCont/PageCont";

export default function Home({
  setTitle,
}: {
  setTitle: PageProps;
}): React.JSX.Element {
  setTitle("Viktor Kolev");

  return (
    <PageCont>
      <main className="grid xl:grid-cols-3 sm:grid-cols-2 sm:grid-rows-1 grid-rows-2 mb-15">
        <div>
          <h1 className="lg:text-6xl text-5xl font-bold mb-0.5 sm:">
            Hello there!
          </h1>
          <h3 className="md:text-3xl text-cyan-500 text-2xl font-semibold mb-2">
            I'm Viktor - an aspiring Front-End Developer.
          </h3>
          <p className="sm:text-xl text-md">
            This website contains some interesting information about me - both
            as a person and as a developer. If you think I'm a good fit for a
            job {"(anything web dev related)"} or simply want to get in contact
            with me for any reason at all, please do so at any time by going to
            the{" "}
            {
              <NavLink
                to={"/contact"}
                className="text-cyan-500 transition-all duration-200"
              >
                Contact
              </NavLink>
            }{" "}
            page.
          </p>
        </div>
        <div className="bg-amber-50 xl:col-span-2">
          {/* REMOVE DIV, ADD IMAGE */}
        </div>
      </main>

      <p className="md:text-2xl text-xl self-center">
        Thank you for your time! Have a great day and stay safe! :{")"}
      </p>
    </PageCont>
  );
}
