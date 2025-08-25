
let data = [];
let index = 0;
let score = 0;

async function loadData() {
  let res = await fetch('data/a1.json');
  let words = await res.json();
  data = words;
  document.getElementById('score').innerText = "Score: " + score + " / " + data.length;
}

function nextCard() {
  if (index >= data.length) {
    document.getElementById('card').innerText = "🎉 Done for now!";
    return;
  }
  let card = data[index];
  document.getElementById('card').innerHTML = card.de + "<br><i>" + card.en + "</i>";
  score++;
  document.getElementById('score').innerText = "Score: " + score + " / " + data.length;
  index++;
}

document.getElementById('learn').addEventListener('click', nextCard);
loadData();
