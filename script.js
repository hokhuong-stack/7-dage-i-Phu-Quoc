let musikStartet = false;
let brugerHarKlikketPause = false;

function toggleMusik() {
    let lyd = document.getElementById("ferie-musik");
    let knap = document.getElementById("musik-knap");

    if (lyd.paused) {
        lyd.play().then(() => {
            knap.innerHTML = "🔇 Sluk musik";
            knap.classList.add("spiller");
            musikStartet = true;
            brugerHarKlikketPause = false;
        }).catch(error => {
            console.log("Fejl ved afspilning: ", error);
        });
    } else {
        lyd.pause();
        knap.innerHTML = "🎵 Tænd musik";
        knap.classList.remove("spiller");
        brugerHarKlikketPause = true;
    }
}

function visDag(event, dagId) {
    let indhold = document.getElementsByClassName("program-indhold");
    for (let i = 0; i < indhold.length; i++) {
        indhold[i].style.display = "none";
    }

    let knapper = document.getElementsByClassName("fane-knap");
    for (let i = 0; i < knapper.length; i++) {
        knapper[i].className = knapper[i].className.replace(" aktiv", "");
    }

    let markorer = document.getElementsByClassName("kort-marker");
    for (let i = 0; i < markorer.length; i++) {
        markorer[i].classList.remove("lyser-op");
        markorer[i].style.color = ""; 
    }

    document.getElementById(dagId).style.display = "block";
    event.currentTarget.className += " aktiv";

    let valgtMarker = document.getElementById("marker-" + dagId);
    if (valgtMarker) {
        valgtMarker.classList.add("lyser-op");
        valgtMarker.style.color = "white";
    }

    if (musikStartet === false && brugerHarKlikketPause === false) {
        let lyd = document.getElementById("ferie-musik");
        let knap = document.getElementById("musik-knap");
        if (lyd) {
            lyd.play().then(() => {
                musikStartet = true;
                knap.innerHTML = "🔇 Sluk musik";
                knap.classList.add("spiller");
            }).catch(e => {
                console.log("Autoplay blokeret", e);
            });
        }
    }

    // Ruller skærmen blødt ned til toppen af programmet
    document.querySelector('.indhold-wrapper').scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
    });
}
