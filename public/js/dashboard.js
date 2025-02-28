document.querySelector("#new-post-btn").addEventListener("click", () => {
    document.location.replace("/dashboard/new");
  });
  
  // DELETE POST FUNCTIONALITY
  const deleteButtons = document.querySelectorAll(".delete-post");
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", async (evt) => {
      const id = evt.currentTarget.getAttribute("data-id");
      const deletePost = await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
  
      console.log(deletePost);
      document.location.replace("/dashboard");
    });
  }
  
  // EDIT POST FUNCTIONALITY (REDIRECT TO EDIT PAGE)
  const editButtons = document.querySelectorAll(".edit-post");
  for (var i = 0; i < editButtons.length; i++) {
    editButtons[i].addEventListener("click", async (evt) => {
      const id = evt.currentTarget.getAttribute("data-id");
      document.location.replace(`/dashboard/edit/${id}`);
    });
  }
  
  // UPDATE POST FUNCTIONALITY (HANDLES FORM SUBMISSION)
  const updateForm = document.querySelector("#update-post-form");
  if (updateForm) {
    updateForm.addEventListener("submit", async (event) => {
      event.preventDefault();
  
      const id = updateForm.getAttribute("data-id");
      const title = document.querySelector("#post-title").value.trim();
      const content = document.querySelector("#post-content").value.trim();
  
      if (title && content) {
        const response = await fetch(`/api/posts/${id}`, {
          method: "PUT",
          body: JSON.stringify({ title, content }),
          headers: { "Content-Type": "application/json" },
        });
  
        if (response.ok) {
          document.location.replace("/dashboard");
        } else {
          alert("Failed to update the post.");
        }
      }
    });
  }
