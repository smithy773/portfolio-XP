import type { ShowModalFN } from "../..";

export default function Modal({ setShowModal }: ShowModalFN) {
  return (
    <div className="bg-lightgray self-center p-3 rounded-md justify-self-center flex flex-col gap-4">
      <h3 className="lg:text-4xl md:text-3xl font-semibold mb-0.5 text-cyan-500">
        Message not sent!
      </h3>
      <p className="text-lg">
        Fields can't be empty! Please fill in the needed information.
      </p>
      <button
        className="btn text-2xl font-bold"
        onClick={() => setShowModal(false)}
      >
        Close
      </button>
    </div>
  );
}
