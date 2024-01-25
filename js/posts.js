//import fetch from 'node-fetch'   

let _data = {
    title: "teste de envio",
    body: "Loreen ipsum sit dlor amet consectur",
    userId: 5
}

const postContainer = document.getElementById('posts')
let postMarkup = ''
function setPost(data) {

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST', // quando utiliza o POST vc envia o conteúdo
        body: JSON. stringify(_data),
        headers: {
            'Content-Type' : 'application/json; charset=UTF-8'
        }
    })
        .then( response => response.json())
        .then( data => console.log(data))
        .catch(error => console.error(error))

}

function getPost() {
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "GET",
        headers: {
            'Content-Type' : 'application/json; charset=UTF-8'
        }
    })
        .then( response => response.json())
        .then( data => {
            data.map(function(post){
                postMarkup += `
                    <div class="posts-item" id="post-${post.id}">
                        <h3>${post.title}</h3>
                        <p>${post.body}</p>
                    </div>
                `
            })
            postContainer.innerHTML = postMarkup
        })
        .catch(error => console.error(error))
}
getPost()
