const feedDiv = document.querySelector("#feed");

function renderPosts() {
    feedDiv.innerHTML = "";

    // fetch("https://maximedebosschere.com/posts.json")
    fetch('posts.json')
        .then(response => response.json())
        .then(posts => {
            for (let post of posts) {
                const postDiv = document.createElement("div");
                postDiv.classList.add("post");

                let commentsHtml = "";
                for (let comment of post.comments) {
                    commentsHtml += `<li>${comment}</li>`;
                }

                postDiv.innerHTML = `
                    <div>
                        <span class="bold">@${post.user}</span> • likes: <span class="like-count">${post.likes}</span>
                    </div>
                    
                    <p>${post.text}</p>
                    
                    <div>
                        <button class="btn like-btn">❤️ Like</button>
                        <button class="btn comments-btn">Show comments</button>
                    </div>
                    
                    <ul class="comments-list hidden">
                        ${commentsHtml}
                    </ul>
                `;

                const commentsBtn = postDiv.querySelector(".comments-btn");
                const commentsList = postDiv.querySelector(".comments-list");
                commentsBtn.addEventListener("click", () => {
                    commentsList.classList.toggle("hidden");

                    if (commentsList.classList.contains("hidden")) {
                        commentsBtn.innerHTML = "Show comments";
                    } else {
                        commentsBtn.innerHTML = "Hide comments";
                    }
                });

                const likeBtn = postDiv.querySelector(".like-btn");
                const likeCountSpan = postDiv.querySelector(".like-count");
                likeBtn.addEventListener("click", () => {
                    likeBtn.classList.toggle("liked");

                    if (likeBtn.classList.contains("liked")) {
                        post.likes += 1;
                    } else {
                        post.likes -= 1;
                    }

                    likeCountSpan.innerHTML = post.likes;
                });
                
                feedDiv.appendChild(postDiv);
            }
        });
};

renderPosts();