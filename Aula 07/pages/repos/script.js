var json = localStorage.getItem("user")
var user = JSON.parse(json)

console.log(user)

var img = document.getElementById('image') //.src = user.avatar_url
var h1 = document.getElementById('name') //.innerText = user.name

img.src = user.avatar_url
h1.innerText = user.name

async function pegarRepos() {
    var response = await fetch(user.repos_url)
    var repos = await response.json()

    console.log(repos)

    var main = document.getElementById('main')

    // var nome = 'FrontEnd Essencial'
    // var linguagem = 'javascript/css/html'

    // main.innerHTML = `
    // <div class="card_container">
    //     <strong>${nome}</strong>
    //     <span>${linguagem}</span>
    // </div>
    // `

    repos.forEach((repositorio) => {

        main.innerHTML += `
        <div class="card_container">
            <strong>${repositorio.name}</strong>
            <span>${repositorio.language}</span>
        </div>
        `

    });

   

}

pegarRepos()