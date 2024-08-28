        "use strict";
        (async () => {
            window.onerror = (e, source, lineno, colno, err) => {
                let msg = "Unhandled error at " + (source || "unknown source ");
                if (lineno != null)
                    msg += lineno;
                if (colno != null)
                    msg += ":" + colno;
                if (err != null)
                    msg += "\n\n" + err;
                alert(msg, "Error");
            };
            document.onkeydown = (e) => {
                if (e.ctrlKey && !e.altKey && !e.metaKey && !e.shiftKey) {
                    switch (e.key) {
                        case "q":
                            e.preventDefault();
                            e.stopPropagation();
                            window.location.replace("https://www.google.com/webhp?igu=1");
                            break;
                    }
                }
            };
        })();

        function reloadIframe() {
            const iframe = document.getElementById('hiddenIframe');
            iframe.src = iframe.src;
        }


// taken from T-Crack
