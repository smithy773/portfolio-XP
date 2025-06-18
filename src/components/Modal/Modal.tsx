import type { ShowModalFN } from "../..";
import { ModalStore } from "../../store/ModalInfo";

export default function Modal({
  setShowModal,
  success,
}: {
  setShowModal: ShowModalFN;
  success: boolean;
}) {
  return (
    <div className="bg-lightgray self-center p-3 rounded-md justify-self-center flex flex-col gap-4">
      <h3 className="lg:text-4xl md:text-3xl font-semibold mb-0.5 text-cyan-500">
        {success ? ModalStore.success.title : ModalStore.failure.title}
      </h3>
      <p className="text-lg">
        {success
          ? ModalStore.success.description
          : ModalStore.failure.description}
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
