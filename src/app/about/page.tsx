export const metadata = {
    title: 'About | Podsite',
    description: 'Learn more about Podsite and our mission.',
};

export default function AboutPage() {
    return (
        <div style={{ padding: 'var(--spacing-3xl) 0' }}>
            <div className="container">
                <article style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <header style={{ marginBottom: 'var(--spacing-3xl)', textAlign: 'center' }}>
                        <h1>About Podsite</h1>
                        <p className="text-muted" style={{ fontSize: '1.25rem' }}>
                            We're on a mission to bring the most insightful tech conversations to your ears.
                        </p>
                    </header>

                    <section style={{ marginBottom: 'var(--spacing-3xl)' }}>
                        <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Our Story</h2>
                        <p>
                            Podsite started as a small experimental project to explore the intersection of
                            artificial intelligence, design systems, and modern web development. What
                            began as a simple collection of interviews has grown into a global community
                            of builders, designers, and dreamers.
                        </p>
                        <p>
                            Our goal is to provide a platform where the most creative minds in tech can
                            share their stories, challenges, and visions for the future. We believe in
                            the power of conversation to bridge gaps and inspire innovation.
                        </p>
                    </section>

                    <section style={{ marginBottom: 'var(--spacing-3xl)' }}>
                        <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>The Team</h2>
                        <p>
                            We are a remote-first team of developers, designers, and audio engineers
                            dedicated to creating the best listening experience possible. We're
                            passionate about clean code, beautiful design, and high-quality audio.
                        </p>
                    </section>

                    <div style={{
                        backgroundColor: 'var(--color-bg-elevated)',
                        padding: 'var(--spacing-2xl)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--color-border)',
                        textAlign: 'center'
                    }}>
                        <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>Want to join the conversation?</h3>
                        <p className="text-muted" style={{ marginBottom: 'var(--spacing-lg)' }}>
                            We're always looking for interesting guests and sponsors.
                        </p>
                        <a href="mailto:hello@podsite.com" className="playBtn" style={{
                            display: 'inline-block',
                            padding: 'var(--spacing-md) var(--spacing-2xl)',
                            backgroundColor: 'var(--color-primary)',
                            color: 'white',
                            borderRadius: 'var(--radius-md)',
                            fontWeight: 700
                        }}>
                            Get in Touch
                        </a>
                    </div>
                </article>
            </div>
        </div>
    );
}
