interface Props {
  btnText: string;
  color?: "primary" | "secondary" | "danger" | "warning"; //optional for color
  onClick: () => void;
}

const Button = ({ btnText, color = "primary", onClick }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {btnText}
    </button>
  );
};

export default Button;
