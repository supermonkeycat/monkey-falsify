function switchStylesheet(newStylesheet) { //switches styles
        var link = document.getElementById('stylesheet');
        link.href = newStylesheet;
    }
function aboutblanker() {
    const iframe = document.getElementById('hiddenIframe');
    var newWindow = window.open('about:blank');
    if (newWindow) {
        window.location.replace("https://www.google.com/webhp?igu=1");
        var uURL = iframe.src
        newWindow.document.open();
        newWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    html, body {
                        margin: 0;
                        padding: 0;
                        overflow: hidden;
                        height: 100%;
                        width: 100%;
                    }
                    iframe {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        border: none;
                    }
                </style>
            </head>
            <body>
                <iframe src="${uURL}" frameborder="0"></iframe>
            </body>
            </html>
        `);
        newWindow.document.close();
    } else {
        console.error('Failed to open a new window.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const secretCode = window.config.entryPhrase;
    const alternatecode = window.config.blanker;
    let input = '';

    document.addEventListener('keydown', (event) => {
        input += event.key;
// if statement to track inputs to switch styles and content on the site
        if (input.endsWith(secretCode)) {
            document.getElementById('guard').style.display = 'none'
            switchStylesheet('truth.css')
            document.getElementById('secretContent').style.display = 'block';
        }

        if (input.endsWith(alternatecode)) {
            aboutblanker();
        }
       //optional
        if (input.length > secretCode.length) {
            input = input.slice(-secretCode.length);
        }
    });
});
