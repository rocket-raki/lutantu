// screens/people.js

export function loadPeople(container) {
    container.innerHTML = `
        <h1>People Page</h1>
        <p>Find and follow other users.</p>

        <div class="people-list">
            <div class="person-item">
                <p>@john_doe</p>
                <button>Follow</button>
            </div>
            <div class="person-item">
                <p>@jane_smith</p>
                <button>Follow</button>
            </div>
            <div class="person-item">
                <p>@tech_guru</p>
                <button>Follow</button>
            </div>
        </div>
    `;

    // Example follow buttons logic
    container.querySelectorAll(".person-item button").forEach(btn => {
        btn.addEventListener("click", () => {
            btn.textContent = btn.textContent === "Follow" ? "Following" : "Follow";
        });
    });
}
