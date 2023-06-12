document.addEventListener('DOMContentLoaded', function() {
    const avatar = document.querySelector('#avatar');
    const name = document.querySelector('#name');
    const login = document.querySelector('#login');
    const repository = document.querySelector('#repository');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const bio = document.querySelector('#bio'); 
    const link = document.querySelector('#link');

    fetch('https://api.github.com/users/rafaareis')
        .then(function(resposta) {
            return resposta.json();
        })

        .then(function(json) {
            console.log(json);
            avatar.src = json.avatar_url;
            name.innerText = json.name;
            login.innerText = json.login;
            repository.innerText = json.public_repos;
            followers.innerText = json.followers;
            following.innerText = json.following;
            bio.innerText = json.bio
            link.href = json.html_url;


        })
})