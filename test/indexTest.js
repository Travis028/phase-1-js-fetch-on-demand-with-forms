// The code below ensures that students who are using CodeGrade will get credit
// for the code-along in Canvas; you can disregard it.


const init = () => {
  const inputForm = document.querySelector("form");

  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = document.querySelector("input#searchByID");

    fetch(`http://localhost:3000/movies/${input.value}`)
      .then((response) => response.json())
      .then((data) => {
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");

        title.innerText = data.title;
        summary.innerText = data.summary;
      })
      .catch((error) => {
        console.error("Error fetching movie:", error);
      });
  });
};

document.addEventListener("DOMContentLoaded", init);
