const prompt = require('prompt-sync')()

let validAnswer = [1,2,3,4,5]
let array = [{
    question: " Question 1 : Ou se situe la statue de la Liberté ? ",
    answer: ["1: los angeles", "2: paris", "3: new york", "4: las vegas", "5: istanbul"],
    rightanswer: "3: new york"
},
{
    question: " Question 2 : Combien de jours d'anniversaires a une personne qui a vécu 50 ans ? ",
    answer: ["1: 0", "2: 1", "3: 25", "4: 49", "5: 50"],
    rightanswer: "2: 1"
},
{
    question: " Question 3 : Quelle est la capitale du Royaume-Uni ? ",
    answer: ["1: londre", "2: dublin", "3: berlin", "4: royaume uni", "5: new york"],
    rightanswer: "1: londre"
}, {
    question: " Question 4 : Il y a 10 prunes. Vous en prenez 4. Combien en avez-vous ? ",
    answer: ["1: 0", "2: 4", "3: 6", "4: 8", "5: 10"],
    rightanswer: "2: 4"
},

{
    question: " Question 5 : Combien y a t-il de paires de chaussettes dans une vingtaine ? ",
    answer: ["1: 0", "2: 10", "3: 20", "4: 40", "5: 80"],
    rightanswer: "3: 20"
}];
let score = 0;

for (let i = 0; i < array.length; i++) {

    console.log(array[i].question);
    for (let j = 0; j < array[i].answer.length; j++) {
        console.log(array[i].answer[j]);
    }
    let response = parseInt(prompt("entrez le numero de la bonne reponse : "))
    
    while ( validAnswer.indexOf(response) == -1 ) {
        response = parseInt(prompt("tu t'es trompé, entrez le numero de la bonne reponse : "))
    }

    if (array[i].answer[response - 1] === array[i].rightanswer) {
        console.log("Bonne reponse ");
        score += 1
    } else {
        console.log("mauvaise reponse ");
    }
}

console.log("Votre score final de bonne reponse est de :", score)