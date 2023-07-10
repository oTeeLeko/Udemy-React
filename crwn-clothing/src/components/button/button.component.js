import "./button.styles.scss";

const BUTTON_TYPES_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = function ({ children, buttonType, ...otherProps }) {
  return (
    <button
      className={`button-container ${BUTTON_TYPES_CLASSES}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export default Button;
