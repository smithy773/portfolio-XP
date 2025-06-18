export interface ModalInfoProps {
  title: string;
  description: string;
}

interface ModalStoreProps {
  [key: string]: ModalInfoProps;
}

export const ModalStore: ModalStoreProps = {
  success: {
    title: "Message sent!",
    description:
      "Your message has been sent successfully! I will contact you via email as soon as possible.",
  },
  failure: {
    title: "Message not sent!",
    description:
      "Fields can't be empty! Please fill in the needed information.",
  },
};
