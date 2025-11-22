// screens/account.js

export function loadAccount(container) {
    container.innerHTML = `
        <h1>Account Page</h1>
        <p>Manage your account settings here.</p>

        <div class="account-section">
            <h2>Profile Info</h2>
            <p>Name: John Doe</p>
            <p>Email: johndoe@example.com</p>
        </div>

        <div class="account-section">
            <h2>Settings</h2>
            <button id="logout-btn">Logout</button>
        </div>
    `;

    // Example: Add interactivity
    const logoutBtn = container.querySelector("#logout-btn");
    logoutBtn.addEventListener("click", () => {
        alert("You have been logged out!");
        // Add your logout logic here
    });
}
