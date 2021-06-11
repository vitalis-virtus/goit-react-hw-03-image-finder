/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const key = "20359077-3bc8ecc9aab86af1558f74303";

const fetchImages = ({ searchQuery = "", currentPage = 1, pageSize = 12 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${key}&image_type=photo&orientation=horizontal&per_page=${pageSize}`
    )
    .then((response) => response.data.hits);
};

export default { fetchImages };
