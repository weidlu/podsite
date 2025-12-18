import FeaturedEpisode from '@/components/episodes/FeaturedEpisode';
import EpisodeCard from '@/components/episodes/EpisodeCard';
import { episodes } from '@/data/episodes';
import Link from 'next/link';
import styles from './Home.module.css';

export default function Home() {
    const featured = episodes[0];
    const recent = episodes.slice(1, 4);

    return (
        <div>
            <FeaturedEpisode episode={featured} />

            <section className={styles.recentSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <div>
                            <span className={styles.subtitle}>
                                Latest Releases
                            </span>
                            <h2 className={styles.title}>Recent Episodes</h2>
                        </div>
                        <Link href="/episodes" className={styles.viewAll}>
                            View All Episodes &rarr;
                        </Link>
                    </div>

                    <div className={styles.grid}>
                        {recent.map(episode => (
                            <EpisodeCard key={episode.id} episode={episode} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
