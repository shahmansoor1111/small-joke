const jokes = [
  "استاد: پڑھائی کیوں نہیں کرتے؟ شاگرد: کیونکہ بجلی والا بل ٹرین کی طرح دوڑتا ہے!",
  "بیوی: سنو! خواب میں میں نے سونا دیکھا، شوہر: بجلی کا بل تو نہیں دیکھا؟",
  "ڈاکٹر: نیند آتی ہے؟ مریض: جی ہاں، کلاس میں سب سے زیادہ!",
  "بیوی: سنو! میرے بال کم کیوں ہو گئے ہیں؟ شوہر: کیونکہ دماغ زیادہ ہے۔",
  "استاد: تم اسکول دیر سے کیوں آئے؟ شاگرد: راستے میں وقت ضائع ہو گیا!"
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
  
  const container = document.querySelector('.container');
  container.classList.add('dance');
  setTimeout(() => container.classList.remove('dance'), 2000);
});