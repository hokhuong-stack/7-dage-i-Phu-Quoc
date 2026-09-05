let musikStartet = false;
let brugerHarKlikketPause = false;

function toggleMusik() {
    let lyd = document.getElementById("ferie-musik");
    let knap = document.getElementById("musik-knap");

    if (lyd.paused) {
        // Tving mobilen til at indlæse lyden med det samme
        lyd.load();
        
        let afspilningsForsog = lyd.play();
        if (afspilningsForsog !== undefined) {
            afspilningsForsog.then(() => {
                knap.innerHTML = "🔇 Sluk musik";
                knap.classList.add("spiller");
                musikStartet = true;
                brugerHarKlikketPause = false;
            }).catch(error => {
                console.log("Mobilen blokerede afspilning: ", error);
            });
        }
    } else {
        lyd.pause();
        knap.innerHTML = "🎵 Tænd musik";
        knap.classList.remove("spiller");
        brugerHarKlikketPause = true;
    }
}
