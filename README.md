This project is a Spotify-integrated web application that fetches a user’s top tracks, analyzes audio features, generates personalized recommendations, and creates custom playlists. The app leverages Spotify’s OAuth for user authentication and various Spotify API endpoints for seamless data retrieval and playlist management.

Features

1. User Authentication:
   • Secure login using Spotify’s Authorization Code Flow.
   • State parameter included for CSRF (Cross-Site Request Forgery) protection.
   • Handles token retrieval and expiration.
2. Top Tracks Display:
   • Fetch and display user’s top tracks using the /me/top/tracks endpoint.
   • View metadata such as track name, artist, and album cover.
   • Allow users to filter top tracks by time ranges (short_term, medium_term, long_term).

Roadmap and future considerations:

adding state param to auth URL while in production

Audio Features Analysis:
• Fetch audio features for tracks using /audio-features/{id}.
Display attributes such as tempo, energy, and danceability in an engaging UI.
Track Recommendations:
• Generate track recommendations using /recommendations endpoint.
• Filter results based on audio features and low popularity.
• Display recommended tracks with metadata.
Custom Playlist Creation:
• Allow users to dynamically name and create playlists in their Spotify profile.
• Add tracks to the playlist using /playlists/{playlist_id}/tracks.
UI/UX Enhancements:
• Visualize audio attributes using Chart.js.
• Responsive design optimized for both mobile and desktop.
• Loading states for better user experience.
