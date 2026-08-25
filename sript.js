const picture = [
    "./asset/img/amphiebie.png",
    "./asset/img/fennek.png",
    "./asset/img/g36.png",
    "./asset/img/kolone.png",
    "./asset/img/liebe.jpg",
    "./asset/img/perfekt.jpg",
    "./asset/img/soldat.png",
    "./asset/img/herzog.png",
    "./asset/img/jäger.png",
    "./asset/img/mts.png",
    "./asset/img/pio.png",
    "./asset/img/reserve.png"
]

const pictureName = [
    "Amphibie",
    "Fennek",
    "G36 und HK 416",
    "Kolonne",
    "Bergepanzer",
    "Amphibie Wasserbrücke",
    "Soldat im Gefecht",
    "Herzog von Braunschweig Kaserne",
    "Jäger Abzeichen",
    "Marine-Technickschule Parow",
    "Pionier Abzeichen",
    "Mein Barett und Dienstgrad",
]

let currentPicture = 0;

pictureRender()   //ist eine function und sorgt dafür das pictureRender ausgeführt wird


function pictureRender(){

    for(let i = 1; i <= picture.length; i++){

        document.getElementById('picture').innerHTML +=                       // die for schleife macht das  man auf das bild drauf clickedn kann und das wenn es mehrere sind immer um ein nach vorne geht
        `<img src="${picture[i - 1]}" onclick="openDialog(${i})">`;
    }
}

function nextPicture() {
    currentPicture++;                                                      // legt fest das es immer einer nach vorne geht und if regelt es sodass es nich undefind wird
   if (currentPicture >= picture.length) {
        currentPicture = 0
    }
    document.getElementById('dialog-img').src = picture[currentPicture]
    document.getElementById('dialog-title').innerHTML = pictureName[currentPicture]
    updateCounter();
}

function previousPicture(){
    currentPicture--;                                                      // hier das gleiche nur wird einer abgezogen
    if (currentPicture < 0){
        currentPicture = picture.length - 1;
    }
    document.getElementById('dialog-img').src = picture[currentPicture]
    document.getElementById('dialog-title').innerHTML = pictureName[currentPicture]
    updateCounter();
}


function openDialog(i) {
    currentPicture = i - 1;

    const dialog = document.getElementById('dialog');
    document.getElementById('dialog-img').src =
        picture[currentPicture];                                                // öffnet das Aktuelle bild was man anclickt und zeigt auch dazu den richtigen Name an 
    document.getElementById('dialog-title').innerHTML =
        pictureName[currentPicture];
    updateCounter();
    dialog.showModal();
}


function closeDialog(){
    const dialog = document.getElementById('dialog');
    dialog.close();
}

function updateCounter() {
    document.getElementById("imageCounter").innerHTML =
        `${currentPicture + 1} / ${picture.length}`;
}