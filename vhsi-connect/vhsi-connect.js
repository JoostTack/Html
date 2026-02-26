const posts = [
    {
        user: "Lars",
        text: "Nieuwe game gekocht 🎮",
        likes: 2,
        comments: ["Nice!", "Welke game?"]
    },
    {
        user: "Imane",
        text: "Festival vibes 🎵",
        likes: 7,
        comments: ["Wauw", "Zalig!"]
    }
];

const feedDiv = document.querySelector("#feed");

function renderPosts() {
    for (let post of posts) {
        const postDiv = document.createElement("div");
        postDiv.classList.add("post");

        let commentsHtml = "";

        postDiv.innerHTML = `
            <div>
                <span class="bold">@${post.user}</span> • likes: ${post.likes}
            </div>
            
            <p>${post.text}</p>
            
            <div>
                <button class="btn">❤️ Like</button>
                <button class="btn">Hide comments</button>
            </div>
            
            <ul class="comments-list">
                ${commentsHtml}
            </ul>
        `;

        feedDiv.appendChild(postDiv);
    }
};
