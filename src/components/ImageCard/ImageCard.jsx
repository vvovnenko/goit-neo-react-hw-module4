import css from "./ImageCard.module.css";

const ImageCard = ({ alt_description, urls }) => {
  return (
    <div className={css.cardWrapper}>
      <img className={css.imageCard} src={urls.small} alt={alt_description} />
      <p className={css.imageCardDescription}>{alt_description}</p>
    </div>
  );
};

export default ImageCard;
