import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ onClickFunc }) => {
  return (
    <button type="button" onClick={onClickFunc} className={styles.Button}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClickFunc: PropTypes.func.isRequired,
};

export default Button;
