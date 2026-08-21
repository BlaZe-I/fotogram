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

let currentPicture = 0;

pictureRender()


function pictureRender(){

    for(let i = 1; i <= picture.length; i++){

        document.getElementById('picture').innerHTML +=
        `<img src="${picture[i - 1]}" onclick="openDialog(${i})">`;
    }
}

function openDialog(i){
    currentPicture = i - 1;
    const dialog = document.getElementById('dialog');
    dialog.showModal();

    document.getElementById('dialog.img').src = picture[currentPicture]
}

function nextPicture() {
    currentPicture++;
   if (currentPicture >= picture.length) {
        currentPicture = 0
    }
    document.getElementById('dialog-img').src = picture[currentPicture]
}

function previousPicture(){
    currentPicture--;
    if (currentPicture < 0){
        currentPicture = picture.length - 1;
    }
    document.getElementById('dialog-img').src = picture[currentPicture]
}


function openDialog(i){

    const dialog = document.getElementById('dialog');

    dialog.showModal();
    document.getElementById('dialog-img').src = picture[i - 1];
}


function closeDialog(){
    const dialog = document.getElementById('dialog');
    dialog.close();
}
