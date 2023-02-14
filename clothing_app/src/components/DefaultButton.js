import React from "react";

const DefaultButton = React.memo(function DefaultButton({
  onClick,
  label,
  icon,
  className = "default_button",
}) {
  return (
    <button className={className} onClick={onClick}>
      {label}
      <i>{icon}</i>
    </button>
  );
});
export default DefaultButton;
