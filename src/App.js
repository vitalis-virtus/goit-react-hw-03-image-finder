import React, { Component } from "react";
import Loader from "react-loader-spinner";
import "./stylesBase.css";
import styles from "./App.module.css";

import imageFinderApi from "./serices/imageFinder-api";

import ImageGallery from "./Component/ImageGallery";
import SearchBar from "./Component/Searchbar";
import Button from "./Component/Button";
import Modal from "./Component/Modal";
// import ImageGalleryItem from "./Component/ImageGalleryItem";
class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: "",
    isLoading: false,
    error: null,
    showModal: false,
    modalImageURL: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = (query) => {
    this.setState({
      images: [],
      currentPage: 1,
      searchQuery: query,
      isLoading: false,
      error: null,
    });
  };

  toggleModal = (url) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      modalImageURL: url,
    }));
  };

  fetchImages = () => {
    this.setState({ isLoading: true });

    const { searchQuery, currentPage } = this.state;
    const fetchOptions = { searchQuery, currentPage };

    imageFinderApi
      .fetchImages(fetchOptions)
      .then((images) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch((error) => this.setState({ error }))
      .finally(() => {
        if (this.state.currentPage > 2) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { images, isLoading, modalImageURL, showModal, error } = this.state;
    const shouldRenderLoadMoreButton = images.length > 0 && !isLoading;

    return (
      <div className={styles.App}>
        {error && <h1>Не удалось загрузить картинки</h1>}
        <SearchBar onSubmit={this.onChangeQuery} />
        <ImageGallery array={images} clickFunc={this.toggleModal} />
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={modalImageURL} alt="" />
          </Modal>
        )}
        {shouldRenderLoadMoreButton && (
          <Button onClickFunc={this.fetchImages} />
        )}
        {isLoading && (
          <Loader
            type="Oval"
            color="#4D4B4E"
            height={100}
            width={100}
            timeout={3000} //3 secs
            className={styles.Spinner}
          />
        )}
      </div>
    );
  }
}
export default App;
