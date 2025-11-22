// screens/explore.js

export function loadExplore(container) {
    container.innerHTML = `
        <h1>Explore Page</h1>
        <p>Discover new content, people, and posts here.</p>

        <div class="explore-section">
            <h2>Trending Topics</h2>
            <ul>
                <li>#Technology</li>
                <li>#AI</li>
                <li>#WebDev</li>
                <li>#Startup</li>
            </ul>
        </div>

        <div class="explore-section">
            <h2>Suggested Users</h2>
            <ul>
                <li>@john_doe</li>
                <li>@jane_smith</li>
                <li>@tech_guru</li>
            </ul>
        </div>
    `;
}
