document.getElementById("submit").onclick = async () => {

    var input = document.getElementById("username");
    var username = input.value;

    // fetch() -- responsavel por chamar a api

    var response = await fetch('https://api.github.com/users/' + username);
    var user = await response.json()

    console.log(user)

    // var nome = 'vincius'
    localStorage.setItem("user", JSON.stringify(user))

    // JSON.stringify -- converter um objeto para um JSON/string
    
    window.location.href = '../repos/index.html'
}

// () => {} -- Arrow function / função anônima
// function () {} -- função anônima

// async function api() {
//     var response = await fetch('https://api.github.com/users/' + username);
//     var user = await response.json()
// }


// var -- Fica no escopo global da sua aplicação;
// let -- fica no escopo onde foi declarada;
// const -- fica no escopo onde foi declara e deve ser inicializada com um valor e não é possivel atribuir um valor depois de sua declaração;

// var nome = '';
// const sobrenome = ''

// nome = 'vincius'
// sobrenome = 'schiffler'

// console.log(nome)
// console.log(sobrenome)


// const dias = ['seg', 'ter', 'qua'];

// console.log(dias)

// dias.pop()

// // dias = []

// console.log(dias)