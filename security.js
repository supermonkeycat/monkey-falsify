// this page attempts to stop use of source code viewing by easy chrome shortcuts
// the idea of this is to stop administrators from seeing the true nature of the site
// that being said you still can see the source code of the site pretty easily
// and i also don't want to obfuscuation 

document.addEventListener('contextmenu', event => event.preventDefault());

document.onkeydown = (e) => {
    if (e.ctrlKey && !e.altKey && !e.metaKey && !e.shiftKey) {
        switch (e.key) {
            case "u": 
                e.preventDefault();
                e.stopPropagation();
                break;
            case "i": 
                e.preventDefault();
                e.stopPropagation();
                break;
            case "j": 
                e.preventDefault();
                e.stopPropagation();
                break;
        }
    }

   
    if (e.key === "F12") {
        e.preventDefault();
        e.stopPropagation();
    }


    if (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) {
        e.preventDefault();
        e.stopPropagation();
    }
};
