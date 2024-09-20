const apiKey = 'd93115754010beb32ae8956c26dbc590'; // not my api key. is that bad?
const movieContainer = document.getElementById('mediascroller');
const searchInput = document.getElementById('searchinputMedia');
function newpage(url) {
    window.location.href = url;
}
function addMediaButton(item) {
    const button = document.createElement('button');
    button.className = 'mediabutton';

    const image = document.createElement('img');
    image.src = item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : 'placeholder.jpg';
    image.className = 'mediabutton-image';
    button.appendChild(image);

    const text = document.createElement('span');
    text.innerText = item.title || item.name; 
    button.appendChild(text);

    button.onclick = () => handleMediaClick(item);

    movieContainer.appendChild(button);
}

function handleMediaClick(item) {
    if (item.media_type === "movie") {
        let id = item.id;
        let season = -1;
        let episode = -1;
        newpage(`portal.html?id=${encodeURIComponent(id)}&season=${encodeURIComponent(season)}&episode=${encodeURIComponent(episode)}`);
    } else if (item.media_type === "tv") {
        let id = item.id;
        let season = prompt('Which season?');
        let seasonnumber = Number(season)
        let episode = prompt('What episode?'); 
        let episodenumber = Number(episode)
        if(!isNaN(seasonnumber) && !isNaN(episodenumber && seasonnumber > 0 && episodenumber > 0) ) {
            newpage(`portal.html?id=${encodeURIComponent(id)}&season=${encodeURIComponent(season)}&episode=${encodeURIComponent(episode)}`);
        }
        else {alert('invalid')}
        
    }
}


function searchmedia(query) {
    fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&include_adult=false&query=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => {
            movieContainer.innerHTML = '';
            data.results.forEach(item => {
                if (!(item.genre_ids.includes(2000) && item.original_language === 'ja')) {
                    addMediaButton(item);
                }
            });
        })
        .catch(error => console.error('Error fetching movies and TV shows:', error));
}


// event istener
searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim();
    if (query.length > 2) { 
        searchmedia(query);
    }
});
