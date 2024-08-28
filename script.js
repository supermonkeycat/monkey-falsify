function switchStylesheet(newStylesheet) { //switches styles
        var link = document.getElementById('stylesheet');
        link.href = newStylesheet;
    }
document.addEventListener('DOMContentLoaded', () => {
    const secretCode = window.config.entryPhrase;
    let input = '';

    document.addEventListener('keydown', (event) => {
        input += event.key;
// if statement to track inputs to switch styles and content on the site
        if (input.endsWith(secretCode)) {
            document.getElementById('guard').style.display = 'none'
            switchStylesheet('truth.css')
            document.getElementById('secretContent').style.display = 'block';
        }
       //optional
        if (input.length > secretCode.length) {
            input = input.slice(-secretCode.length);
        }
    });
});
