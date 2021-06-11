import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem";
import styles from "./ImageGalleryItem.module.css";

// const ImageGallery = ({ children }) => {
//   return <ul className="ImageGallery">{children}</ul>;
// };

const ImageGallery = ({ array, clickFunc }) => {
  return (
    <ul className={styles.ImageGallery}>
      {array.map((image) => (
        <ImageGalleryItem
          key={image.id}
          id={image.id}
          webformatURL={image.webformatURL}
          // largeImageURL={image.largeImageURL}
          description={image.tags}
          itemClicked={clickFunc}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  array: PropTypes.arrayOf(PropTypes.object).isRequired,
  clickFunc: PropTypes.func.isRequired,
};

export default ImageGallery;
