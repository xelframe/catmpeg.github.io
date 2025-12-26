const lastPlayedBlock = document.getElementById('last-played');

fetch("https://lastfm-last-played.biancarosa.com.br/catmpeg/latest-song")
    .then(response => response.json())
    .then(data => {
        if (data != 0) {
            const lastPlayed = document.querySelector("#song");
            lastPlayed.innerHTML = `<a target="_blank" href="${data.track.url}">
                ${data.track.name} - ${data.track.artist["#text"]}</a>`;
            lastPlayedBlock.style.display = "block";
        }
    })
    .catch(err => console.error(err));