// used for setTitle func inside each Page Component (Home, NoPage, etc.)
export type PageProps = (arg0: string) => void;
export interface ShowModalFN {
  setShowModal: (arg0: boolean) => void;
}
