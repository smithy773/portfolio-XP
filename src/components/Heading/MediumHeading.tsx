export default function MediumHeading(props: any) {
  return (
    <h3
      className={`md:text-3xl text-cyan-500 text-2xl font-semibold ${props.className}`}
    >
      {props.children}
    </h3>
  );
}
