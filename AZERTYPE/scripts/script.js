

//console.log("Hello World")

//let motTapeOK = false

// if(motTapeOK){
//     console.log("Bravo, vous avez correctement tapé le mot")
// }else{
//     console.log("Echec, le mot n'est pas correct")
// }


//Rédigez un test avec des opérateurs de comparaison
// let motUtilisateur = prompt("Entrez un mot : ")
// console.log(motUtilisateur)

// const motApplication = "Bonjour"
// let motUtilisateur = prompt("Entrez le mot : " + motApplication)

// if (motUtilisateur === motApplication) {
//     console.log("Bravo !")
// } else{
//     console.log("Vous avez fait une erreur de frappe.")
// }

// let motUtilisateur = prompt("Entrez un mot : ")
// console.log(motUtilisateur)



// const motApplication = "Bonjour"
// let motUtilisateur = prompt("Entrez un mot : " + motApplication)

// if(motUtilisateur === motApplication){
//     console.log("Bravo !")
// }else{
//     if (motUtilisateur === "Gredin"){
//         console.log("Restez correct !")
//     } else {
//         if(motUtilisateur === "Mécréant"){
//             console.log("Restez correct !")
//         } else {
//             if (motUtilisateur === "Vilain") {
//                 console.log("Soyez gentil !")
//             } else {
//                 console.log("Vous avez fait une erreur de frappe.")
//             }
//         }
//     }
// }



// switch case
const motApplication = "Bonjour"
let motUtilisateur = prompt("Entrez un mot : " + motApplication)

switch (motUtilisateur) {
    case motApplication:
        console.log("Bravo !")
        break
    case "Gredin":
        console.log("Restez correct !")
        break
    case "Mécréant":
        console.log("Restez correct !")
        break
    case "Vilain":
        console.log("Soyez gentil")
        break
    default:
        console.log("Vous avez fait une erreur de frappe.")
}

// En résumé
// Une condition est un type de structure conditionnelle qui contient un test dont le résultat sera vrai ou faux.

// Les conditions if / else permettent d’exécuter du code selon une réponse unique à un test.

// Les conditions switch permettent d’exécuter du code si notre test peut avoir plusieurs réponses.

// Vous pouvez utiliser des booléens pour les tests de vos conditions, ou des opérateurs de comparaison, en fonction de ce que vous souhaitez tester.

// Vous avez rédigé vos premières conditions en JavaScript : félicitations ! 🥳 Suivez-moi dans le prochain chapitre pour découvrir les boucles !

