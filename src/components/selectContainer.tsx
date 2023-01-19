type SelectContinerProp = {
  placeholderText?: string;
};

export default function SelectContainer(props: SelectContinerProp) {
  return props.placeholderText ? (
    <div>{props.placeholderText}</div>
  ) : (
    <div></div>
  );
}
