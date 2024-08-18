import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ gallery, openModal }) => {
  const handleOnClick = (src, alt) => {
    openModal({ src, alt });
  };

  return (
    <ul className={css.imageGallery}>
      {gallery.map(({ id, alt_description, urls }) => (
        <li
          className={css.imageGalleryItem}
          key={id}
          onClick={() => handleOnClick(urls.regular, alt_description)}
        >
          <ImageCard urls={urls} alt_description={alt_description} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
