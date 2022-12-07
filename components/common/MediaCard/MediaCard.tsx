import styles from './MediaCard.module.css';
import { MediaModel } from '../../../types/MediaModel';

type Props = {
  media: MediaModel;
};

const MediaCard = ({ media }: Props) => {
  return (
    <a
      href={media.targetUrl}
      target="_blank"
      rel="noreferrer"
      className={styles.card}
    >
      <img
        src={media.imgUrl}
        className={styles.image}
        alt={media.description}
      />
    </a>
  );
};

export default MediaCard;
