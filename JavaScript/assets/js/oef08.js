let dieren=["Beer","Kip","Varken"];

document.addEventListener("DOMContentLoaded",
   init);

function init()
{
    document.querySelector("#frmDieren").
     addEventListener('submit',klik);
   ToonDieren();
}

function ToonDieren()
{
   const $ulDieren = document.querySelector("ul");
   $ulDieren.innerHTML="";
   for(let dier of dieren)
   {
      $ulDieren.insertAdjacentHTML("beforeend",`<li>${dier}</li>`);
   }


}

function klik(e)
{
   e.preventDefault();  //default action van de submit 
                        //van het form gaan blokkeren

   const $nieuwDier=document.querySelector("#txtDier");
   //$mijnDiv.innerHTML+="<p>Kat</p>";
   //+= innerHTML is niet vervangen maar uitbreiden
   //maar niet de voorkeur
   //beforebegin = voor de div zetten
   //afterbegin = in de div voor de eerste p
   //beforeend = in de div na de laatste p
   //afterend = na de div
   dieren.push($nieuwDier.value);//toevoegen aan de array
   //$mijnDiv.insertAdjacentHTML("beforeend",`<li>${$nieuwDier.value}</li>`);
   ToonDieren();
   console.log(dieren);
}