console.clear();

const page = document.querySelector('[data-js="page"]');

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

function newPost(postText, postSpan) {
  const postArticleItem = document.createElement("article");
  const postTextItem = document.createElement("p");
  const postFooter = document.createElement("footer");
  const postSpanItem = document.createElement("span");
  const postButton = document.createElement("button");

  postArticleItem.classList.add("post");
  postTextItem.classList.add("post__content");
  postButton.classList.add("post__button");
  postButton.textContent = "♥ Like";
  postButton.addEventListener("click", handleLikeButtonClick);
  postTextItem.textContent = postText;
  postSpanItem.textContent = postSpan;

  console.log(page);

  page.append(postArticleItem);
  postArticleItem.appendChild(postTextItem);
  postArticleItem.appendChild(postFooter);
  postArticleItem.appendChild(postSpanItem);
  postArticleItem.appendChild(postButton);
}

newPost("hi i am a text adsdasda", "Krischan");
