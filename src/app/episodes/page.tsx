import EpisodeCard from '@/components/episodes/EpisodeCard';
import { episodes } from '@/data/episodes';

export const metadata = {
    title: 'All Episodes | Podsite',
    description: 'Browse all episodes of Podsite podcast.',
};

export default function EpisodesPage() {
    return (
        <div style={{ padding: 'var(--spacing-3xl) 0' }}>
            <div className="container">
                <header style={{ marginBottom: 'var(--spacing-3xl)', textAlign: 'center' }}>
                    <h1>All Episodes</h1>
                    <p className="text-muted" style={{ fontSize: '1.25rem' }}>
                        Browse through our complete library of insightful conversations.
                    </p>
                </header>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: 'var(--spacing-xl)'
                }}>
                    {episodes.map(episode => (
                        <EpisodeCard key={episode.id} episode={episode} />
                    ))}
                </div>
            </div>
        </div>
    );
}
