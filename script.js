function toggleMusik() {
    let lyd = document.getElementById("ferie-musik");
    let knap = document.getElementById("musik-knap");

    if (lyd.paused) {
        lyd.play().then(() => {
            knap.innerHTML = "🔇 Sluk musik";
            knap.classList.add("spiller");
        }).catch(error => {
            console.log("Mobilen blokerede afspilning: ", error);
        });
    } else {
        lyd.pause();
        knap.innerHTML = "🎵 Musik";
        knap.classList.remove("spiller");
    }
}
