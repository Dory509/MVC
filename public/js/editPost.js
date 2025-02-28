const editPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    const postId = document.querySelector('#edit-post-form').dataset.id;

    if (title && content) {
        const response = await fetch(`/api/posts/${postId}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to update post.');
        }
    }
};

const deletePostHandler = async () => {
    const postId = document.querySelector('#delete-btn').dataset.id;

    const response = await fetch(`/api/posts/${postId}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to delete post.');
    }
};

document.querySelector('#edit-post-form').addEventListener('submit', editPostHandler);
document.querySelector('#delete-btn').addEventListener('click', deletePostHandler);