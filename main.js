class Pokemon {
  constructor(name, hp, attack, defense, abilities = []) {
    this.hp = hp
    this.attack = attack
    this.defense = defense
    this.abilities = abilities
    this.name = name
  }

  addAbility(ability) {
    this.abilities.push(ability)
  }
}

function drawCard(cardId, data) {
  //name of the pokemon
  let item = document.createElement("h1");
  // // item.id = product.id;
  item.innerHTML += `<h1>Name: ${data.name}</h1>`;

  //hp - integer
  let hp = document.createElement("div");
  hp.innerHTML = `<div> HP: ${data.stats[5].base_stat}</div>`;

  // attack - integer
  //   var attack = info['stats'][4]['base_stat'];
  let attack = document.createElement("div");
  attack.innerHTML = `<div> Attack: ${data.stats[4].base_stat}</div>`;

  //   var defense = info['stats'][3]['base_stat'];
  let defense = document.createElement("div");
  defense.innerHTML = `<div> Defense: ${data.stats[3].base_stat}</div>`;

  let abilitiesHeader = document.createElement('h3');
  abilitiesHeader.innerText = "Abilities";

  let abilities = document.createElement("p");

  data.abilities.forEach(item => {
    abilities.innerHTML += `<p>${item.ability.name}</p>`;
  });

  let pokemonCard = document.getElementById(cardId);
  pokemonCard.appendChild(item);
  pokemonCard.appendChild(hp);
  pokemonCard.appendChild(attack);
  pokemonCard.appendChild(defense);
  pokemonCard.appendChild(abilitiesHeader);
  pokemonCard.appendChild(abilities);
}

axios.get("https://fizal.me/pokeapi/api/v2/id/64.json")
  .then(response => {
    console.log(response.data);
    drawCard('card-kadabra', response.data);
  });


axios.get("https://fizal.me/pokeapi/api/v2/id/114.json")
  .then(response => {
    console.log(response.data);
    drawCard('card-tangela', response.data);
  });



axios.get("https://fizal.me/pokeapi/api/v2/id/500.json")
  .then(response => {
    console.log(response.data);
    drawCard('card-emboar', response.data);
  });
function image_enlarge(img01)
{
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;

  // Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}
}
}






image_enlarge(img01);
image_enlarge(img02);
image_enlarge(img03);

function trainer() {
  var variable = document.getElementById('input_id').value;
  document.getElementById('alert').innerHTML = 'The trainer name is: ' + variable;
}





