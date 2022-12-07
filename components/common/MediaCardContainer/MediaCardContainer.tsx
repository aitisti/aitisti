import styles from './MediaCardContainer.module.css';
import { MediaModel } from '../../../types/MediaModel';
import MediaCard from '../MediaCard';

type Props = {
  title: string;
  recommendations: MediaModel[];
};

const MediaCardContainer = ({ title, recommendations }: Props) => {
  return (
    <section className={styles.container}>
      <h2>{title}</h2>
      <div className={styles.recommendations}>
        {recommendations.map((r, i) => (
          <MediaCard key={i} media={r} />
        ))}
      </div>
    </section>
  );
};

export default MediaCardContainer;
