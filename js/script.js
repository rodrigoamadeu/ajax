const url = 'https://api.github.com/users';
const main = document.getElementById('main');
let user = 'rodrigoamadeu';

fetch(`${url}/${user}`)
    .then((response) => response.json())
    .then((data) => {
        main.innerHTML = `${data.name} possui ${data.public_repos} Repositórios no GitHub como ${data.username}`
    })
    .catch((error) => console.error('Erro: ', error.message || error))
