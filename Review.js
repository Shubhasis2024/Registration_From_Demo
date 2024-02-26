alert("Read all the Deatlis carefully");
const blogContainer = document.getElementById("blogs");

async function getAllblog() {
  const response = await fetch("/api/posts");
  const blogs = response.json();
  return blogs;
}

getAllblog().then((blogs) => {
  blogs.forEach((blog) => {
    const card = document.createElement("div");
    card.id = blog._id;
    card.classList.add("card");
    card.style.width = "18rem";
    card.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">Firstname: ${blog.Firstname}</h5>
        <h5 class="card-title">Lastname: ${blog.Lastname}</h5>

        <h5 class="card-title">Emailid: ${blog.email}</h5>

        <h5 class="card-title">CollegeName: ${blog.college}</h5>
        
        <h5 class="card-title">Rollid: ${blog.roll}</h5>
   
        <h5 class="card-title">Passout Year: ${blog.year}</h5>
    
      </div>
    `;

    blogContainer.appendChild(card);
  });
});
