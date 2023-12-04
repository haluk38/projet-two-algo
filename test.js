const prompt = require('prompt-sync')()
let choice = ""

console.log("Vous etes devant un chateau voulez vous entrer ? ")
choice = prompt("oui ou non ?")
while (choice != "oui" && choice != "non") {
    choice = prompt("oui ou non ?")
}
if (choice == "oui") {
    console.log("Vous entrez dans le chateau, vous voyez une grande table avec de la bouffe, voulez vous vous approcher et manger ?");
    choice = prompt("oui ou non ?")
    while (choice != "oui" && choice != "non") {
        choice = prompt("oui ou non ?")
    }
    if (choice == "oui") {
        console.log("Vous manger tout ce que vous pouvez, vous mourrez d'un empoisonnement alimentaire");
        console.log("perdu");
    } else {
        console.log("Felicitation, tu es entrer dans le chateau, tu decide d'y habiter, Bravo !");
    }
} else {
    console.log("vous vous eloigner en direction de la foret, vous voyez un troll, voulez vous le combattre ?");
    choice = prompt("oui ou non ?")
    while (choice != "oui" && choice != "non") {
        choice = prompt("oui ou non ?")
    }
    if (choice == "oui") {
        console.log("tu attaque le troll, tu le tue d'un coup bien placé ! La chance ! tu as gagné !!!");
    } else {
        console.log("Le troll t'attaque en premier ! Trop tard tu es mort !");
        console.log("Perdu !!!");
    }

}


