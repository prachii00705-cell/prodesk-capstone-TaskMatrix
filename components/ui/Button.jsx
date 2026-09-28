export default function Button({
  children,
  variant = "primary",
  fullWidth = false,
  type = "button",
  ...props
}) {
  const classes = [
    "button",
    variant === "secondary" ? "button-secondary" : "button-primary",
    fullWidth ? "button-full" : "",
  ].join(" ");

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
