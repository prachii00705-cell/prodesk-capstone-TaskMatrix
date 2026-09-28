export default function Avatar({ initials, size = "md", tone = "blue" }) {
  return (
    <div className={`avatar avatar-${size} avatar-${tone}`}>{initials}</div>
  );
}
