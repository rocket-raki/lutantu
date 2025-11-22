// screens/notification.js

export function loadNotification(container) {
    container.innerHTML = `
        <h1>Notifications Page</h1>
        <p>All your alerts and updates will appear here.</p>

        <div class="notifications-list">
            <div class="notification-item">User @john_doe liked your post.</div>
            <div class="notification-item">User @jane_smith started following you.</div>
            <div class="notification-item">Your post reached 100 likes!</div>
        </div>
    `;
}
