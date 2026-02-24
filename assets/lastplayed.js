document.addEventListener("DOMContentLoaded", () => {
    const lastPlayedBlock = document.getElementById('last-played');

    fetch("https://cat.fs.tlpteam.ru:5011/?user=xelframe")
        .then(response => response.json())
        .then(data => {
            if (data && data.name) {
                const lastPlayed = document.getElementById("song");
                lastPlayed.innerHTML = `<a target="_blank" href="${data.url}">
                    ${data.name} - ${data.artist}</a>`;
                lastPlayedBlock.style.display = "block";
            }
        })
        .catch(err => console.error(err));
});