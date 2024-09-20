function addGameButton(name, imageUrl, variable) {
    const container = document.getElementById('gamescroller');
    const button = document.createElement('button');
    button.className = 'gamebutton';
  
    button.onclick = function() {
      handleButtonClick(variable);
    };
  
    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = name;
    image.className = 'gamebutton-image';
    button.appendChild(image);
  
    const text = document.createElement('span');
    text.innerText = name;
    text.className = 'gamebutton-text';
    button.appendChild(text);
  
    container.appendChild(button);
  }
  
  function handleButtonClick(variable) {
    window.location.href = variable;
  }

  function filterGames() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const buttons = document.querySelectorAll('#gamescroller .gamebutton');

    buttons.forEach(button => {
        const name = button.querySelector('.gamebutton-text').innerText.toLowerCase();
        if (name.includes(query)) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });
}
 

  function loadGameButtons() {
    fetch('../gversion/g.json')
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(data => {
        data.forEach(item => {
          const { name, imageUrl, variable } = item; 
          addGameButton(name, imageUrl, variable);
        });
      })
      .catch(error => {
        console.error('Failed to fetch JSON:', error);
      });
  }
  document.getElementById('searchInput').addEventListener('input', filterGames);
  document.addEventListener('DOMContentLoaded', loadGameButtons);
  