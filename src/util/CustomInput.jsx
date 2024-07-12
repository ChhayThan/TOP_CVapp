import "./CustomInput.css";

export default function CustomInput({
  type,
  inputId,
  value,
  onChange,
  placeholder,
}) {
  return (
    <input
      type={type}
      id={inputId}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
