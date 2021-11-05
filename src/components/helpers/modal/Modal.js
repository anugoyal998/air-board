import React, { useRef } from "react";

function Modal(props) {
  const { open, setOpen, component } = props;
  const modalRef = useRef();
  const handleClick = (e) => {
    if (modalRef.current === e.target) {
      setOpen(false);
    }
  };
  if (open)
    return (
      <div
        ref={modalRef}
        onClick={handleClick}
        className="h-screen w-screen absolute top-0 z-10 flex justify-center items-center"
        style={{ background: "rgba(196, 196, 196, 0.3)" }}
      >
        {component}
      </div>
    );
  else return null;
}

export default Modal;
