import Image from 'next/image';
import { Episode } from '@/types';
import { formatDate } from '@/lib/utils';
import styles from './FeaturedEpisode.module.css';
import { Play } from 'lucide-react';

interface FeaturedEpisodeProps {
    episode: Episode;
}

const FeaturedEpisode = ({ episode }: FeaturedEpisodeProps) => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <span className={styles.badge}>Featured Episode</span>
                    <h1 className={styles.title}>{episode.title}</h1>
                    <p className={styles.summary}>{episode.summary}</p>
                    <div className={styles.meta}>
                        <span>{formatDate(episode.publishDate)}</span>
                        <span className={styles.separator}>|</span>
                        <span>{episode.duration}</span>
                    </div>
                    <button className={styles.playBtn}>
                        <Play size={20} fill="currentColor" />
                        Listen to Episode
                    </button>
                </div>
                <div className={styles.imageWrapper}>
                    <Image
                        src={episode.coverImage}
                        alt={episode.title}
                        fill
                        className={styles.image}
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default FeaturedEpisode;
