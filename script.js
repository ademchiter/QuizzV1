// mon tableau de questions
let questions = [
  "qui est le roi des animaux ?", 
  "quel est l'animal qui court le plus vite ?"
];


//mon tableau de réponses
let reponses = [
  "le lion",
  "le guepard"
];


//1 ère solution
    let compteur=0;
questions.forEach(question => {

    console.log(question)
    const maReponse = prompt(question);

    if(maReponse===reponses[compteur]){
alert("bien joué")
}else {
 alert("c'est loupé")
}
compteur=compteur+1;
});

//2 ème solution - solution que nous à expliquer nico
questions.forEach((question, pos) => {
const maReponse2 = prompt(question)

if(maReponse2 === reponses[pos]){

alert("bien joué")
}else {
 alert("c'est loupé")
}
 });