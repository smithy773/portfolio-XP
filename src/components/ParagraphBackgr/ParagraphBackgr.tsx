export default function ParagraphBackgr(props: any) {
  return (
    <p className={`bg-lightgray px-3 py-1.5 rounded-md ${props.className}`}>
      {props.children}
    </p>
  );
}
