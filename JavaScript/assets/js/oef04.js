document.addEventListener("DOMContentLoaded",
   init);

function init()
{
    //document.querySelector("#frmSom button").
    //addEventListener('click',klik);
    document.querySelector("#frmSom").
     addEventListener('submit',klik);
     //ipv een klik op een button doen, doe je beter
     //bij een formulier met een submit die gekoppeld is
     //aan de button
   console.log("INIT");
}

function klik(e)
{
   e.preventDefault();  //default action van de submit 
                        //van het form gaan blokkeren
   console.log('KLIK');
   const getal1 = document.querySelector('#getal1').value;
   const getal2 = document.querySelector('#getal2').value;
   const som= parseFloat( getal1)+ parseFloat( getal2);

   document.querySelector('#som').innerHTML=`<strong>${som}</strong>`;
}