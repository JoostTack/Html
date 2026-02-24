const players=[
   {player:"Kylian Mbappé",img:"assets/img/oef06/mbappe.png", shooting:8,passing:7,dribbling:9,defending:3},
   {player:"Erling Haaland",img:"assets/img/oef06/haaland.png", shooting:10,passing:6,dribbling:6,defending:4},
   {player:"Kevin De Bruyne",img:"assets/img/oef06/debruyne.png", shooting:7,passing:10,dribbling:7,defending:6},
   {player:"Lionel Messi",img:"assets/img/oef06/messi.png", shooting:9,passing:9,dribbling:10,defending:3},
   {player:"Virgil van Dijk",img:"assets/img/oef06/vandijk.png", shooting:4,passing:7,dribbling:5,defending:10},
];


document.addEventListener("DOMContentLoaded",
   init);


function init()
{
    document.querySelector("#frmGuessPlayer").
     addEventListener('submit',klik);
}

function klik(e)
{
   e.preventDefault();  //default action van de submit 
                        //van het form gaan blokkeren
   console.log('KLIK');
   let shooting = parseFloat(document.querySelector('#Shooting').value);
   let passing = parseFloat(document.querySelector('#Passing').value);
   let dribbling = parseFloat(document.querySelector('#Dribbling').value);
   let defending = parseFloat(document.querySelector('#Defending').value);


   const player=guessPlayer(shooting, passing, dribbling, defending);

   document.querySelector('#player').src=
      `${player.img}`;
      console.log(document.querySelector('#player').src);
}

function guessPlayer(shooting, passing, dribbling, defending) {
   let smallestDiff = Infinity;
   let bestMatch = null;

    for (let player of players) 
    {
    
      let diff = player.shooting - shooting 
      player.passing - passing 
      player.dribbling - dribbling 
      player.defending - defending
      console.log(player.player);
      console.log(diff);
 
      if (Math.abs(diff) < Math.abs(smallestDiff))
      {
         smallestDiff = Math.abs(diff);
         bestMatch = player;

      }
    }
    return bestMatch;
   }