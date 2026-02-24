document.addEventListener("DOMContentLoaded",
   init);

function init()
{
    document.querySelector("#frmGezondheid").
     addEventListener('submit',klik);
}

function klik(e)
{
   e.preventDefault();  //default action van de submit 
                        //van het form gaan blokkeren
   console.log('KLIK');
   let slaap = parseFloat(document.querySelector('#Slaap').value);
   let water = parseFloat(document.querySelector('#Water').value);
   let beweging = parseFloat(document.querySelector('#Beweging').value);

   if(slaap>8) slaap=8;
   if(water>2) water=2;
   if(beweging>7000) beweging=7000;

   const scoreSlaap = slaap/8*100;
   const scoreWater = water/2*100;
   const scoreBeweging = beweging/7000*100;

   const mijnScore = (scoreSlaap+scoreWater+scoreBeweging)/3;

   document.querySelector('#mijnScore').innerHTML=
      `<strong>${Math.round( mijnScore)}</strong>`;
}