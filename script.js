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






/*
questions.forEach(question => {
    console.log(question)
    
});


reponses.forEach(reponse => {
    console.log(reponse)
});

console.log(questions[0])


console.log(reponses[0])
*/