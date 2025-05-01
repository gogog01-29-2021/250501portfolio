// github.js

document.addEventListener('DOMContentLoaded', () => {
    fetchGitHubProfile();
    fetchGitHubRepositories();
});

// Fetch GitHub Profile Info
async function fetchGitHubProfile() {
    const profileContainer = document.getElementById('github-profile');
    if (!profileContainer) {
        console.error("No #github-profile element found!");
        return;
    }

    profileContainer.innerHTML = `
    <div class="spinner-container">
        <div class="spinner"></div>
    </div>
`;


    try {
        const response = await fetch('https://api.github.com/users/gogog01-29-2021');
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }
        const profile = await response.json();

        // Clear loading text
        profileContainer.innerHTML = "";

        // Create profile card
        const card = document.createElement('div');
        card.className = 'github-card';
        card.innerHTML = `
            <img src="${profile.avatar_url}" alt="${profile.name}" class="github-avatar">
            <h3>${profile.name}</h3>
            <p>${profile.bio ? profile.bio : "No bio available."}</p>
            <p><strong>Public Repos:</strong> ${profile.public_repos}</p>
            <p><strong>Followers:</strong> ${profile.followers}</p>
            <a href="${profile.html_url}" target="_blank" class="github-link">Visit GitHub Profile</a>
        `;
        profileContainer.appendChild(card);

    } catch (error) {
        console.error(error);
        profileContainer.innerHTML = `<p>Failed to load GitHub Profile. Please try again later.</p>`;
    }
}

// Fetch Public Repositories
async function fetchGitHubRepositories() {
    const profileContainer = document.getElementById('github-profile');
    if (!profileContainer) {
        console.error("No #github-profile element found!");
        return;
    }

    const repoList = document.createElement('div');
    repoList.className = "github-repo-list";
    repoList.innerHTML = "<p>Loading repositories...</p>";
    profileContainer.appendChild(repoList);

    try {
        const response = await fetch('https://api.github.com/users/gogog01-29-2021/repos');
        console.log(response.headers);
        console.log(response.headers.get('Link'));
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }
        const repos = await response.json();

        // Clear loading text
        repoList.innerHTML = `
    <div class="spinner-container">
        <div class="spinner"></div>
    </div>
`;

        console.log(repos.length);
        if (repos.length === 0) {
            repoList.innerHTML = "<p>No public repositories found.</p>";
            return;
        }

        repos.forEach(repo => {
            const repoCard = document.createElement('div');
            repoCard.className = "github-repo-card";

            repoCard.innerHTML = `
                <h4><a href="${repo.html_url}" target="_blank">${repo.name}</a></h4>
                <p>${repo.description ? repo.description : "No description provided."}</p>
                <p>⭐ ${repo.stargazers_count} stars</p>
            `;

            repoList.appendChild(repoCard);
        });
        profileContainer.appendChild(repoList);

    } catch (error) {
        console.error(error);
        repoList.innerHTML = `<p>Failed to load repositories. Please try again later.</p>`;
    }
}
