export default function PageCont(props: any) {
  return (
    <div
      className={`flex flex-col xl:mx-15 sm:mx-10 mx-6 my-20 ${props.className} `}
    >
      {props.children}
    </div>
  );
}
