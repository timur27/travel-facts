# Travel Facts App - Project Brief

## Core Concept

A focused web app for travelers who want to learn interesting historical facts about destinations without the noise of bookings, reviews, and accommodations. The app delivers curated, engaging historical stories rather than overwhelming information.

## Value Proposition

- **Simplicity as a feature**: Only historical facts, no booking/reviews/ads
- **Quick consumption**: 3-5 facts for immediate learning
- **Discovery over planning**: Pocket historian rather than trip planner
- **Quality over quantity**: Curated interesting facts vs. encyclopedic information

## MVP Scope

- **User flow**: Select city → View 5 curated facts
- **Presentation**: Slick UI with card-based or sequential fact display
- **Platform**: Web app only (online)
- **Initial coverage**: 10-20 major cities

## Technical Stack

### Backend
- **Node.js + Express/Fastify**: Modern API framework, full-stack TypeScript alignment
- **Neo4j driver for Node.js or graphology**: Graph database/library for fact relationships
- **PostgreSQL with Prisma/TypeORM**: Structured fact storage
- **Redis**: Caching for frequently accessed data

### Frontend
- **React + TypeScript**: Component-based UI
- **Tailwind CSS**: Rapid, elegant styling
- **Framer Motion**: Smooth animations for fact reveals
- **React Query**: Data fetching and caching
- **Vite**: Fast development environment

## Data Architecture

### Graph-Based Approach
- **Nodes**: Cities, Historical Events, People, Buildings, Cultural Movements, Time Periods
- **Edges**: Relationships with weights (importance, interestingness, surprise factor)
- **Fact generation**: Interesting paths through the graph create compelling narratives
- **Example path**: Venice → Marco Polo → Silk Road → Culinary influence → Venetian-Eastern cuisine connection

### Fact Selection Engine
- **Diversity algorithm**: Ensure facts span different categories (political, architecture, culture, daily life)
- **Novelty scoring**: Prioritize lesser-known facts over common knowledge
- **Narrative flow**: 5 facts tell a loose story rather than random facts
- **Future personalization**: Learn user preferences over time

## Data Sourcing Strategy

### Recommended: Hybrid Approach (AI + Wikidata)

**Process:**
1. Query Wikidata for city entities + linked historical data (events, people, buildings)
2. Extract structured relationships (who, what, when, where)
3. Use LLM to transform dry data into engaging 2-3 sentence stories
4. Store both structured data (graph) and narrative (display)
5. Human spot-check for accuracy (10-20% sample)

**Why this approach:**
- Legally safe (Wikidata is CC0 public domain)
- Structured foundation prevents AI hallucination
- Scalable to hundreds of cities
- Control over narrative style
- Technical challenge aligns with skill development goals

### Alternative Legal Data Sources
- **Wikimedia projects**: Wikipedia, Wikidata, Wikivoyage (CC BY-SA)
- **Project Gutenberg**: Historical texts, travel writings (public domain)
- **Government archives**: National Archives, Library of Congress (public domain)
- **Academic APIs**: Europeana, DPLA (Digital Public Library of America)
- **Direct LLM generation**: GPT-4/Claude outputs (commercial use allowed per ToS)

### Approaches to Avoid
- Web scraping travel blogs/history sites (legal gray area, ToS violations)
- Using copyrighted content without proper licensing

## System Architecture (MVP)

```
User selects city
    ↓
API queries graph for high-quality fact paths
    ↓
Fact selection algorithm (diversity + novelty scoring)
    ↓
Return 5 facts with metadata
    ↓
Beautiful card-based UI presents facts
```

## Differentiation from ChatGPT

- **Purpose-built experience** for this specific user group
- **High-quality datastore** specifically for travel history domain
- **Curated fact selection** via graph algorithm vs. generic AI synthesis
- **Beautiful, focused UI** optimized for discovery
- **Quality metrics**: Track engagement to refine fact selection over time

## Future Considerations

- Audio narration option
- Offline mode (download facts for cities)
- Social sharing capabilities
- Gamification elements
- Personalization based on user engagement

## Post-MVP: Location-Based Discovery Feature

### Business Concept

**Context-aware historical storytelling**: Users can discover facts about specific landmarks, buildings, and places in real-time as they physically approach or visit them.

### User Flow

1. User arrives at or near a point of interest (e.g., World Trade Center in NYC)
2. User opens app and clicks "Discover nearby" button
3. App captures GPS coordinates (latitude/longitude)
4. Backend queries spatial database for landmarks within proximity radius
5. Returns 3-5 curated facts specifically about that landmark/building
6. User experiences immediate, contextual historical knowledge about what they're seeing

### Technical Implementation

**Frontend:**
- Geolocation API for coordinate capture
- Permission handling for location access
- "Discover nearby" CTA button
- Map view showing nearby discoverable landmarks (optional)

**Backend:**
- PostGIS (PostgreSQL spatial extension) for geospatial queries
- Landmark database with precise coordinates
- Proximity search algorithm (e.g., within 100m radius)
- Caching for popular landmarks

**Data Architecture:**
- Extended graph nodes: Add `Landmark` type with geographic coordinates
- Landmark attributes: name, type (building/monument/site), coordinates, radius
- Relationship edges between landmarks and historical facts
- Priority scoring for multi-landmark scenarios (return closest/most significant)

### Value Proposition

- **In-the-moment learning**: Facts delivered when most relevant and engaging
- **Serendipitous discovery**: Users learn about places they didn't know were historically significant
- **Enhanced travel experience**: Turn casual walks into educational journeys
- **Competitive moat**: Requires precise landmark database and spatial indexing

### Differentiation

Unlike generic city-wide facts, this feature provides:
- Hyper-local historical context tied to exact physical locations
- Immediate gratification ("What am I looking at right now?")
- Natural trigger for app usage during travel
- Foundation for AR experiences (future enhancement)

### Monetization Opportunities

- Premium tier for unlimited landmark discoveries
- Guided walking tours (curated sequences of landmarks)
- Local business partnerships (sponsor nearby historical sites)
- Tourist board collaborations (white-label solutions for cities)

## Project Goals

1. Build elegant software engineering solution (graph-based fact selection)
2. Develop technical skills with modern stack
3. Create differentiated user experience focused on historical storytelling
4. Establish scalable, legally compliant data pipeline
