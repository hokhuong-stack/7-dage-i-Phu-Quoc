function visDag(event, dagId) {
    // 1. Find alle kasser med program-indhold og skjul dem
    let indhold = document.getElementsByClassName("program-indhold");
    for (let i = 0; i < indhold.length; i++) {
        indhold[i].style.display = "none";
    }

    // 2. Find alle faneknapper og fjern "aktiv" markeringen fra dem
    let knapper = document.getElementsByClassName("fane-knap");
    for (let i = 0; i < knapper.length; i++) {
        knapper[i].className = knapper[i].className.replace(" aktiv", "");
    }

    // 3. Find alle prikkerne på kortet, sluk for deres glød og nulstil tekstfarven
    let markorer = document.getElementsByClassName("kort-marker");
    for (let i = 0; i < markorer.length; i++) {
        markorer[i].classList.remove("lyser-op");
        markorer[i].style.color = ""; 
    }

    // 4. Vis indholdet for netop den dag, brugeren har klikket på
    document.getElementById(dagId).style.display = "block";

    // 5. Gør den knap, brugeren netop har klikket på, mørk ("aktiv")
    event.currentTarget.className += " aktiv";

    // 6. Find den prik på kortet, der passer til dagen (f.eks. "marker-dag2")
    let valgtMarker = document.getElementById("marker-" + dagId);
    
    // Hvis der findes en prik for dagen (Dag 1 og 7 har fx ingen prik), så få den til at lyse!
    if (valgtMarker) {
        valgtMarker.classList.add("lyser-op");
        valgtMarker.style.color = "white"; // Sørger for, at selve tallet bliver hvidt
    }
}