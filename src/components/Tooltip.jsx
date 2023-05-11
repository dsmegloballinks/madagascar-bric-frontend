import React from "react";

export default function Tooltip({ children, text, ...rest }) {
  const [show, setShow] = React.useState(false);

  return (
    <div style={{ position: "relative" }}>
      <div
        {...rest}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </div>
      <div className="tooltip" style={show ? { visibility: "visible" } : {}}>
        {text}
      </div>
    </div>
  );
}
