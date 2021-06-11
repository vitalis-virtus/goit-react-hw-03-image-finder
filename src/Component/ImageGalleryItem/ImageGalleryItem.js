import React from "react";
import PropTypes from "prop-types";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ id, webformatURL, description, itemClicked }) => {
  const clickFunc = () => {
    itemClicked(webformatURL);
  };
  return (
    <li className={styles.ImageGalleryItem} onClick={clickFunc}>
      <img
        src={webformatURL}
        alt={description}
        className={styles.ImageGalleryItemImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  itemClicked: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
