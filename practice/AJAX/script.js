const root = document.getElementById("root");

function getJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((res) => res.json())
    .then((e) => {
      displayPunchline(e.punchline);
    });
}

getJoke();

function displayPunchline(data) {
  const card = document.getElementById("card");
  const p = document.createElement("p");
  p.textContent = data;
  card.appendChild(p);
}
