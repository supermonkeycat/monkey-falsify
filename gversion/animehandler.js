const searchtheanime = document.getElementById('searchinputanime');
const clientId = 'a908c3ca90ddc6f29b894427e8361e4e';
function newpage(url) {
    window.location.href = url;
}
function searchAnime(query) {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.myanimelist.net/v2/anime?q=${encodeURIComponent(query)}&limit=10`, {
        headers: {
            'X-MAL-CLIENT-ID': clientId 
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('animeContainer').innerHTML = '';
        data.data.forEach(anime => {
            addAnimeButton(anime.node.title, anime.node.main_picture ? anime.node.main_picture.medium : null, anime.node.id);
        });
    })
    .catch(error => console.error('Error fetching anime:', error));
}
function addAnimeButton(title, imageUrl, animeId) {
    const button = document.createElement('button');
    button.className = 'animebutton';
    
    const image = document.createElement('img');
    image.src = imageUrl ? imageUrl : 'placeholder.jpg';
    image.className = 'animebutton-image';
    button.appendChild(image);

    const text = document.createElement('span');
    text.innerText = title;
    button.appendChild(text);

    button.onclick = () => {
        handleAnimeClick(title, animeId);
    };

    document.getElementById('animeContainer').appendChild(button);
}

function handleAnimeClick(animeId) {
        let id = animeId;
        let season = -2
        let seasonnumber = season
        let episode = prompt('What episode?'); 
        let episodenumber = Number(episode)
        if(!isNaN(seasonnumber) && !isNaN(episodenumber && episodenumber > 0) ) {
            newpage(`portal.html?id=${encodeURIComponent(id)}&season=${encodeURIComponent(season)}&episode=${encodeURIComponent(episode)}`);
        }
    }
searchtheanime.addEventListener('input', () => {
    const query = searchtheanime.value.trim();
    if (query.length > 2) { 
        searchAnime(query);
    }
});