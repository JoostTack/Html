document.addEventListener("DOMContentLoaded",
   init);
/*
DOM Document Object Model
eerst alles laden die in de html pagina staat
addEventListener = luisteren naar een
gebeurtenis en als die gebeurt 
(laden van het document )
dan wordt de gebeurtenis init uitgevoerd
*/


function init()
{
    let naam='Tack';
    const $naam=document.querySelector('#naam');
    const $voornaam=document.querySelector('#voornaam');
    //naam = gewone variabele
    //$naam = variabele die naar 
    //een element uit de html verwijst = const
    console.log('Initialization');
    document.querySelector('p').
     innerHTML='<strong>Hallo Joost</strong>';
     //textContent toon gewoon de tekst
     //innerhtml toon ook opmaak
    console.log($voornaam);
    
    $naam.innerHTML=naam;
    $voornaam.innerHTML='Joost';
}