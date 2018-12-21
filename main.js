
axios.get("https://pokeapi.co/api/v2/pokemon/064/")
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
      

    data.abilities.forEach(item => {
      abilities.innerHTML += item.ability.name + "<br>"
    });
    

      
    
     let kadabraCard = document.getElementById('card-kadabra');
     kadabraCard.appendChild(item);
     kadabraCard.appendChild(hp);
     kadabraCard.appendChild(attack);
     kadabraCard.appendChild(defense);
     kadabraCard.appendChild(abilities);
     

  });


  axios.get("https://pokeapi.co/api/v2/pokemon/114/")
  .then(response => {

    let data = response.data;
    console.log(data);

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


      data.abilities.forEach(item => {
        abilities.innerHTML += item.ability.name + "<br>"
      });
      
  
        
      
       let tangelaCard = document.getElementById('card-tangela');
       tangelaCard.appendChild(item);
       tangelaCard.appendChild(hp);
       tangelaCard.appendChild(attack);
       tangelaCard.appendChild(defense);
       tangelaCard.appendChild(abilities);

  });



  axios.get("https://pokeapi.co/api/v2/pokemon/114/")
  .then(response => {

    let data = response.data;
    console.log(data);

    
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
      
      
      let emboarCard = document.getElementById('card-emboar');
      emboarCard.appendChild(item);
      emboarCard.appendChild(hp);
      emboarCard.appendChild(attack);
      emboarCard.appendChild(defense);
      emboarCard.appendChild(abilities);

  });


      // Get the modal
      var modal = document.getElementById('myModal');
      
      // Get the image and insert it inside the modal - use its "alt" text as a caption
      var img = document.getElementById('myImg');
      var modalImg = document.getElementById("img01");
      var captionText = document.getElementById("caption");
      img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }
      
      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];
      
      // When the user clicks on <span> (x), close the modal
      span.onclick = function() { 
        modal.style.display = "none";
      }
      