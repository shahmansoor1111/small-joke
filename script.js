const jokes = [
  "Why don’t skeletons fight each other? They don’t have the guts!",
  "I told my computer I needed a break, and it said ‘No problem – I’ll go to sleep.’",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "I tried to catch fog yesterday. Mist!",
  "Why did the bicycle fall over? It was two-tired!"
];

const jokeBtn = document.getElementById('jokeBtn');
const jokeBox = document.getElementById('jokeBox');
const danceBtn = document.getElementById('danceBtn');

jokeBtn.addEventListener('click', () => {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  jokeBox.textContent = randomJoke;
  jokeBox.style.transform = 'scale(1.1)';
  setTimeout(() => {
    jokeBox.style.transform = 'scale(1)';
  }, 300);
});

danceBtn.addEventListener('click', () => {
  // Add dance animation to the container (not body to avoid scroll issues)
  const container = document.querySelector('.container');
  container.classList.add('dance');
  setTimeout(() => container.classList.remove('dance'), 2000);
});