document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const titleElement = document.querySelector('#movieDetails h4');
  const summaryElement = document.querySelector('#movieDetails p');
  const searchInput = document.getElementById('searchByID');

  // Clear form and display elements on page load
  titleElement.textContent = 'Title';
  summaryElement.textContent = 'Summary';
  searchInput.value = '';

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const movieId = searchInput.value.trim();
    
    // Validate input
    if (!movieId) {
      titleElement.textContent = 'Error';
      summaryElement.textContent = 'Please enter a movie ID';
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/movies/${movieId}`);
      
      if (!response.ok) {
        throw new Error('Movie not found');
      }
      
      const movie = await response.json();
      
      titleElement.textContent = movie.title;
      summaryElement.textContent = movie.summary;
      
    } catch (error) {
      titleElement.textContent = 'Error';
      summaryElement.textContent = error.message || 'Please enter a valid movie ID (1-3)';
    }
  });
});

// Remove the duplicate DOMContentLoaded event listener
document.removeEventListener("DOMContentLoaded", init);
