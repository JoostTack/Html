console.log("Hallo 5 en 6 ADB !!");

const voornaam="Joost";
const familienaam="Tack";//niet te veranderen variabele
let leeftijd=51;//veranderlijke variabele

console.log(voornaam);
console.log(familienaam);
console.log(leeftijd);

leeftijd=45;

console.log(leeftijd);
// ` = alt+gr µ 
// \n = nieuwe regel
console.log(voornaam + " "+familienaam);//afgeraden
//string interpolation
console.log(`hallo, mijn naam is ${voornaam} ${familienaam} \nen mijn leeftijd is ${leeftijd} jaar`);
