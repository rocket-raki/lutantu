// Set document title
document.title = `Lutantu`;

// Global selected page
let currentPage = "home";

// Create navigation bar
function createNavbar() {
    // Remove existing nav
    const oldNav = document.querySelector("nav");
    if (oldNav) oldNav.remove();

    const nav = document.createElement("nav");

    const items = [
        { icon: "home", page: "home" },
        { icon: "search", page: "explore" },
        { icon: "add_box", page: "post" },
        { icon: "people", page: "people" },
        { icon: "notifications", page: "notification", id: "notification-bottom" }, // skip on mobile
        { icon: "account_circle", page: "account" }
    ];

    items.forEach(item => {
        // Skip bottom notification on mobile
        if (window.innerWidth <= 600 && item.id === "notification-bottom") return;

        const div = document.createElement("div");
        div.className = "nav-item";

        const span = document.createElement("span");
        span.className = "material-symbols-outlined";
        span.textContent = item.icon;

        // Click handler
        span.addEventListener("click", () => showPage(item.page));

        if (item.id) span.id = item.id;

        div.appendChild(span);
        nav.appendChild(div);
    });

    document.body.appendChild(nav);

    // Highlight the selected page after creating navbar
    highlightSelected(currentPage);
}

// Highlight selected icon
function highlightSelected(page) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('selected'));

    const icons = document.querySelectorAll('.nav-item span');
    icons.forEach(icon => {
        if (icon.textContent === getIconForPage(page)) {
            icon.parentElement.classList.add('selected');
        }
    });
}

// Mapping page → icon
function getIconForPage(page) {
    switch (page) {
        case "home": return "home";
        case "explore": return "search";
        case "post": return "add_box";
        case "people": return "people";
        case "notification": return "notifications";
        case "account": return "account_circle";
    }
}

// Show page
async function showPage(page) {
    currentPage = page;

    highlightSelected(page);

    const mainBody = document.querySelector('.main-body');

    try {
        const module = await import(`./screens/${page}.js`);
        const funcName = `load${page.charAt(0).toUpperCase() + page.slice(1)}`;
        if (typeof module[funcName] === "function") {
            module[funcName](mainBody);
        } else {
            mainBody.innerHTML = `<h1>${page} Page</h1><p>Content not found.</p>`;
        }
    } catch (err) {
        console.error(`Failed to load ${page}.js:`, err);
        mainBody.innerHTML = `<h1>${page} Page</h1><p>Error loading content.</p>`;
    }
}


// Create navbar initially
createNavbar();

// Handle window resize (rebuild navbar)
let resizeTimer;
window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        createNavbar();
    }, 200);
});

// Expose functions globally (for inline onclick)
window.showPage = showPage;
window.highlightSelected = highlightSelected;

// Load default page
showPage(currentPage);
