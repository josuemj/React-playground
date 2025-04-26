import "./Label.css";

type LabelProps = {
  label: string;

};
export function Label({ label }: LabelProps) {
  const labelLength = label.length;

  return (
    <>
      <div className="label">{label}</div>
    </>
  );
}
