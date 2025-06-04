interface NoPageProps {
  setTitle: (arg0: string) => void;
}

export default function NoPage({ setTitle }: NoPageProps): React.JSX.Element {
  setTitle("Page not found");
  return <h3>What are you doing here?</h3>;
}
