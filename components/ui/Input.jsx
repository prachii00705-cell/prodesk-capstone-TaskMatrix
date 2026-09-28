export default function Input({ label, id, type = "text", ...props }) {
  return (
    <div className="field-group">
      {label ? (
        <label htmlFor={id} className="field-label">
          {label}
        </label>
      ) : null}
      <input id={id} type={type} className="text-input" {...props} />
    </div>
  );
}
