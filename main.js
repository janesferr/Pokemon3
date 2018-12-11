
axios.get("https://pokeapi.co/api/v2/pokemon/500/")
  .then(response => {

    let data = response.data;
    console.log(data);

    // for (let i = 0; i < data.products.length; i++) {
    //  let product = data.products[i];
     let item = document.createElement("h1");
    // // item.id = product.id;
     item.innerHTML += `<h1>Name: ${data.name}</h1>`;

     


     //hp - integer
     let hp = document.createElement("div");
     hp.innerHTML = `<div> HP: ${data.stats[5].base_stat}<div>`;

     // attack - integer
      //   var attack = info['stats'][4]['base_stat'];
      let attack = document.createElement("div");
      attack.innerHTML = `<div> Attack: ${data.stats[4].base_stat}<div>`;

      //   var defense = info['stats'][3]['base_stat'];
      let defense = document.createElement("div");
      defense.innerHTML = `<div> Defense: ${data.stats[3].base_stat}<div>`;


      let abilities = document.createElement("p");
      let abilities1 = document.createElement("p");
      
     for (i = 0; i < data.abilities.length; i++) {
     
     abilities.innerHTML = `<p>Abilities: ${data.abilities[0].ability.name}<p>`;
     abilities1.innerHTML = `<p>Abilities two: ${data.abilities[1].ability.name}<p>`;
     
    //  document.body.appendChild(abilities);
     }

      
     document.body.appendChild(item);
     
     document.body.appendChild(hp);
     document.body.appendChild(attack);
     document.body.appendChild(defense);
     document.body.appendChild(abilities);
     document.body.appendChild(abilities1);
    

  });


  axios.get("https://pokeapi.co/api/v2/pokemon/600/")
  .then(response => {

    let data = response.data;
    console.log(data);

    // for (let i = 0; i < data.products.length; i++) {
    //  let product = data.products[i];
     let item = document.createElement("h1");
    // // item.id = product.id;
     item.innerHTML += `<h1>Name: ${data.name}</h1>`;

     


     //hp - integer
     let hp = document.createElement("div");
     hp.innerHTML = `<div> HP: ${data.stats[5].base_stat}<div>`;

     // attack - integer
      //   var attack = info['stats'][4]['base_stat'];
      let attack = document.createElement("div");
      attack.innerHTML = `<div> Attack: ${data.stats[4].base_stat}<div>`;

      //   var defense = info['stats'][3]['base_stat'];
      let defense = document.createElement("div");
      defense.innerHTML = `<div> Defense: ${data.stats[3].base_stat}<div>`;


      let abilities = document.createElement("p");
      let abilities1 = document.createElement("p");
      
     for (i = 0; i < data.abilities.length; i++) {
     
     abilities.innerHTML = `<p>Abilities: ${data.abilities[0].ability.name}<p>`;
     abilities1.innerHTML = `<p>Abilities two: ${data.abilities[1].ability.name}<p>`;
     
    //  document.body.appendChild(abilities);
     }

      
     document.body.appendChild(item);
     
     document.body.appendChild(hp);
     document.body.appendChild(attack);
     document.body.appendChild(defense);
     document.body.appendChild(abilities);
     document.body.appendChild(abilities1);
    

  });



  axios.get("https://pokeapi.co/api/v2/pokemon/114/")
  .then(response => {

    let data = response.data;
    console.log(data);

    // for (let i = 0; i < data.products.length; i++) {
    //  let product = data.products[i];
     let item = document.createElement("h1");
    // // item.id = product.id;
     item.innerHTML += `<h1>Name: ${data.name}</h1>`;

     


     //hp - integer
     let hp = document.createElement("div");
     hp.innerHTML = `<div> HP: ${data.stats[5].base_stat}<div>`;

     // attack - integer
      //   var attack = info['stats'][4]['base_stat'];
      let attack = document.createElement("div");
      attack.innerHTML = `<div> Attack: ${data.stats[4].base_stat}<div>`;

      //   var defense = info['stats'][3]['base_stat'];
      let defense = document.createElement("div");
      defense.innerHTML = `<div> Defense: ${data.stats[3].base_stat}<div>`;


      let abilities = document.createElement("p");
      let abilities1 = document.createElement("p");
      
     for (i = 0; i < data.abilities.length; i++) {
     
     abilities.innerHTML = `<p>Abilities: ${data.abilities[0].ability.name}<p>`;
     abilities1.innerHTML = `<p>Abilities two: ${data.abilities[1].ability.name}<p>`;
     
    //  document.body.appendChild(abilities);
     }

      
     document.body.appendChild(item);
     
     document.body.appendChild(hp);
     document.body.appendChild(attack);
     document.body.appendChild(defense);
     document.body.appendChild(abilities);
     document.body.appendChild(abilities1);
    

  });

// move related information
// priority
// power
// accuracy
// and have this information be hidden by default and then have it display on a button click
// use an animation with the reveal


// Completion Requirements:

// A completed assignment should:

// have a wireframe
// represent a fictitious trainer name
// be deployed to Github pages
// have each pokemon stored within a Pokemon object and have properties for
// 

// defense - integer
// abilities - array of strings
// have all pokemon stored within a container object named after your trainer name
// have a method named all
// accepts no parameters
// returns an array of Pokemon objects
// have a method named get
// accepts 1 parameter called name
// returns a Pokemon object housing information for the pokemon it found