document.addEventListener("DOMContentLoaded",
   init);

function init()
{
    document.querySelector("#frmDieren").
     addEventListener('submit',klik);
}

function klik(e)
{
   e.preventDefault();  //default action van de submit 
                        //van het form gaan blokkeren

   const $mijnDiv = document.querySelector("ul");
   const $nieuwDier=document.querySelector("#txtDier");
   //$mijnDiv.innerHTML+="<p>Kat</p>";
   //+= innerHTML is niet vervangen maar uitbreiden
   //maar niet de voorkeur
   //beforebegin = voor de div zetten
   //afterbegin = in de div voor de eerste p
   //beforeend = in de div na de laatste p
   //afterend = na de div

   $mijnDiv.insertAdjacentHTML("beforeend",`<li>${$nieuwDier.value}</li>`);
   //console.log('KLIK');
}