import { useEffect, useMemo, useState } from "react";
import { Toaster } from "react-hot-toast";

import "./App.css";
import searchPhotos from "./api/photos-api";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const resetPagination = () => {
    setPage(1);
    setTotalPages(1);
  };
  const handleLoadMore = () => {
    setPage(page + 1);
  };
  const isLoadMoreActive = useMemo(() => page < totalPages, [page, totalPages]);

  const [query, setQuery] = useState("");
  const [gallery, setGallery] = useState([]);

  const handleQuery = (newQuery) => {
    setQuery(newQuery);
    setGallery([]);
    resetPagination();
  };

  useEffect(() => {
    if (query === "") return;

    const handleSearch = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await searchPhotos(query, page);
        if (data.total === 0) return;
        setGallery((prevGallery) => [...prevGallery, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    handleSearch();
  }, [page, query]);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState({ src: "", alt: "" });
  const openModal = ({ src, alt }) => {
    setModalImage({ src, alt });
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <SearchBar onSubmit={handleQuery} />
      {gallery.length > 0 && (
        <ImageGallery gallery={gallery} openModal={openModal} />
      )}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {isLoadMoreActive && !isLoading && !isError && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
      )}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        img={modalImage}
      />
      <Toaster position="top-right" reverseOrder={true} />
    </>
  );
}

export default App;
