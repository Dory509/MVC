const viewPost = async (event) => {
    const postId = event.target.dataset.id;
    document.location.replace(`/post/${postId}`);
};

document.querySelectorAll('.post').forEach((post) => {
    post.addEventListener('click', viewPost);
});