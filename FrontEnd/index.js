// // const montdepasse = Monteiro26();

// // if (montdepasse === Monteiro26) {

// // }else{
// //     console.log("mot de passe erroné");
// // }

// const name = document.getElementById('name')
// const password = document.getElementById('password')
// const form = document.getElementById('form')
// const errorElement = document.getElementById('error')

// form.addEventListener('submit', (e) => {
//     let messages = []
//     if(name.value === '' || name.value == null){
//         messages.push('Name is required')
//     }

//     if(password.value.length <= 6) {
//         messages.push('Password must be longer than 6 characters')
//     }

//     if(password.value.length >= 20) {
//         messages.push('Password must be less than 20 characters')
//     }

//     if (password.value === 'password') {
//         messages.push('Password cannot be password')
//     }

//     if (messages.length > 0) {
//         e.preventDefault()
//         errorElement.innerText = messages.join(', ')
//     }
// })

// fetch("fetch(http://localhost:5678/api/works")

export function ajoutListenersAvis() {
    const piecesElements = document.querySelectorAll(".fiches article button");

    for (let i = 0; i < piecesElements.length; i++) {
      piecesElements[i].addEventListener("click", async function (event) {
           /* ... */
      });
    }
}

function genererPieces(pieces){
       for (let i = 0; i < pieces.length; i++) {
       //...
        }
        // Ajout de la fonction ajoutListenersAvis
        ajoutListenersAvis();
    }

    fetch('https://localhost:5678/api/works') {
      method: "Get"
    }
    

    