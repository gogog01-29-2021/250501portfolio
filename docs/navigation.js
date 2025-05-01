// Define all your navigation items here
const navigationItems = [
    { title: "Home", url: "index.html" },
    { title: "Projects", url: "projects.html" },
    { title: "Skills", url: "skills.html" },
    { title: "Contacts", url: "contacts.html" },
    {title:"Github",url:"github.html"},
    {title:"Project Proposal",url:"projectproposal.html"},

    // To add a new tab, simply add a new object here
    // Example: { title: "Blog", url: "blog.html" },
];

// Function to generate the navigation menu
function generateNavigation() {
    const currentPage = window.location.pathname.split('/').pop();
    const navContainer = document.querySelector('nav ul');
    
    if (navContainer) {
        navigationItems.forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = item.url;
            a.textContent = item.title;
            
            // Mark the current page as active
            if (currentPage === item.url) {
                a.classList.add('active');
            }
            
            li.appendChild(a);
            navContainer.appendChild(li);
        });
    }
}

// When the DOM is loaded, generate the navigation
document.addEventListener('DOMContentLoaded', generateNavigation);