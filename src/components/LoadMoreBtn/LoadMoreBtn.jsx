import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ handleLoadMore }) => {
  return (
    <div className={css.buttonContainer}>
      <button onClick={handleLoadMore} type="button">
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
