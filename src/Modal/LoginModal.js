import React from "react";
import ReactModal from "react-modal";

// isOpen,setIsOpen,Login prop is required
const LoginModal = (props) => {
  const style = {
    position: "relative",
    border: "none",
    display: "inline-block",
    padding: "15px 30px",
    "border-radius": "15px",
    "text-decoration": "none",
    "font-weight": "600",
  };
  return (
    <>
    <ReactModal
      isOpen={props.isOpen}
      onRequestClose={() => props.setIsOpen(false)}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
        content: {
          position: "absolute",
          top: "20%",
          left: "20%",
          right: "20%",
          bottom: "40%",
          border: "1px solid #ccc",
          background: "#fff",
          overflow: "auto",
          borderRadius: "20px",
          outline: "none",
          padding: "20px",
        },
      }}
      ariaHideApp={false}
    >
      <button
        style={style}
        disabled={props.disabled}
        onClick={() => {
          props.setDisabled(true);
          props.handleClick();
        }}
      >
        kaikas
      </button>
    </ReactModal></>
  );
};
export default LoginModal;