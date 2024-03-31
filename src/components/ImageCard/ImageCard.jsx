import css from './ImageCard.module.css';

export const ImageCard = ({ description, small }) => {
  return (
    <div className={css.conteiner}>
      <img src={small} alt={description} className={css.image} />
    </div>
  );
};
