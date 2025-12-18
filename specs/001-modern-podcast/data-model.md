# Data Model: Modern Podcast Website

## Entities

### Episode

Represents a single podcast episode.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | `string` | Yes | Unique identifier (e.g., "ep-001"). |
| `title` | `string` | Yes | Title of the episode. |
| `summary` | `string` | Yes | Short description or show notes summary. |
| `publishDate` | `string` | Yes | ISO 8601 date string (YYYY-MM-DD). |
| `duration` | `string` | Yes | Duration string (e.g., "45:00"). |
| `coverImage` | `string` | Yes | URL to the episode cover art (placeholder). |
| `audioUrl` | `string` | Yes | URL to the audio file (placeholder). |

## Mock Data Strategy

Data will be stored in a constant array in `src/data/episodes.ts`:

```typescript
export interface Episode {
  id: string;
  title: string;
  summary: string;
  publishDate: string;
  duration: string;
  coverImage: string;
  audioUrl: string;
}

export const episodes: Episode[] = [
  {
    id: 'ep-001',
    title: 'The Future of AI',
    summary: 'Discussing the implications of AGI...',
    publishDate: '2025-01-01',
    duration: '45:00',
    coverImage: '/images/cover-placeholder.jpg',
    audioUrl: '/audio/placeholder.mp3'
  },
  // ... 19 more items
];
```
