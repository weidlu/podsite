import Link from 'next/link';
import Image from 'next/image';
import { Episode } from '@/types';
import { formatDate } from '@/lib/utils';
import styles from './EpisodeCard.module.css';
import { Play } from 'lucide-react';

interface EpisodeCardProps {
    episode: Episode;
}

const EpisodeCard = ({ episode }: EpisodeCardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={episode.coverImage}
                    alt={episode.title}
                    fill
                    className={styles.image}
                />
                <div className={styles.overlay}>
                    <button className={styles.playButton}>
                        <Play size={24} fill="currentColor" />
                    </button>
                </div>
            </div>
            <div className={styles.content}>
                <span className={styles.date}>{formatDate(episode.publishDate)} &bull; {episode.duration}</span>
                <h3 className={styles.title}>{episode.title}</h3>
                <p className={styles.summary}>{episode.summary}</p>
                <Link href={`/episodes/${episode.id}`} className={styles.link}>
                    Listen Now
                </Link>
            </div>
        </div>
    );
};

export default EpisodeCard;
