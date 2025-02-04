const cardList = document.querySelector(".cards");
const fragment = document.createDocumentFragment();

  
for (let pokemon of data) {
  const li = document.createElement("li");
  li.classList.add("card");

  const h1 = document.createElement("h1");
  li.appendChild(h1);
  h1.classList.add("card--text");
  h1.classList.add("card--title");
  h1.innerText = pokemon.name;

  const img = document.createElement("img");
  img.classList.add("card--img");
  img.src = pokemon.sprites.other["official-artwork"].front_default;
  img.alt = pokemon.name;
  li.appendChild(img);

  let currentSpriteIndex = 0;

  const sprites = [
    pokemon.sprites.other["official-artwork"].front_default,
    pokemon.sprites.front_default,
    pokemon.sprites.back_default,
    pokemon.sprites.front_shiny,
    pokemon.sprites.back_shiny,
  ];

  img.addEventListener("click", () => {
    currentSpriteIndex = (currentSpriteIndex + 1) % sprites.length;
    img.src = sprites[currentSpriteIndex];
  });

  const stats = document.createElement("ul");
  stats.classList.add("card--text");
  li.appendChild(stats);
  for (let stat of pokemon.stats) {
    const statLi = document.createElement("li");
    statLi.classList.add("stat--text");
    statLi.innerText = `${stat.stat.name}: ${stat.base_stat}`;
    stats.appendChild(statLi);
  }

  const gamesTitle = document.createElement("h2");
  gamesTitle.innerText = "Game appearances:";
  gamesTitle.classList.add("game--title");

  const games = document.createElement("ul");
  li.appendChild(gamesTitle);
  games.classList.add("card--text");
  li.appendChild(games);
  pokemon.game_indices.forEach((game, index, array) => {
    const gameLi = document.createElement("li");
    gameLi.innerText = game.version.name;
    gameLi.classList.add("game--text");
    games.appendChild(gameLi);
    if (index < array.length - 1) {
      const separator = document.createElement("span");
      separator.innerText += "•";
      games.appendChild(separator);
    }
  });
  fragment.appendChild(li);
}

cardList.appendChild(fragment);

