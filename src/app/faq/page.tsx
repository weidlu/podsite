export const metadata = {
    title: 'FAQ | Podsite',
    description: 'Frequently asked questions about Podsite.',
};

const faqs = [
    {
        question: "Where can I listen to Podsite?",
        answer: "You can find us on all major podcast platforms including Apple Podcasts, Spotify, Google Podcasts, and right here on our website."
    },
    {
        question: "How often do you release new episodes?",
        answer: "We release new episodes every Thursday at 9:00 AM EST."
    },
    {
        question: "Can I suggest a guest or topic?",
        answer: "Absolutely! We love hearing from our listeners. Head over to our About page to find our contact information."
    },
    {
        question: "Are your transcripts available?",
        answer: "Yes, we provide full transcripts for every episode. You can find them on the individual episode pages."
    },
    {
        question: "How can I support the show?",
        answer: "The best way to support us is by subscribing and leaving a review on your favorite podcast platform. It helps other listeners find the show!"
    }
];

export default function FAQPage() {
    return (
        <div style={{ padding: 'var(--spacing-3xl) 0' }}>
            <div className="container">
                <header style={{ marginBottom: 'var(--spacing-3xl)', textAlign: 'center' }}>
                    <h1>Common Questions</h1>
                    <p className="text-muted" style={{ fontSize: '1.25rem' }}>
                        Everything you need to know about Podsite.
                    </p>
                </header>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {faqs.map((faq, index) => (
                        <div key={index} style={{
                            marginBottom: 'var(--spacing-lg)',
                            padding: 'var(--spacing-xl)',
                            backgroundColor: 'var(--color-bg-elevated)',
                            borderRadius: 'var(--radius-lg)',
                            border: '1px solid var(--color-border)'
                        }}>
                            <h3 style={{ marginBottom: 'var(--spacing-sm)', color: 'var(--color-primary)' }}>
                                {faq.question}
                            </h3>
                            <p style={{ marginBottom: 0 }}>
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: 'var(--spacing-3xl)', textAlign: 'center' }}>
                    <p className="text-muted">
                        Still have questions? <a href="mailto:support@podsite.com">Contact our support team</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
