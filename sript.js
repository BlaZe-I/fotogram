const picture = [
    "./asset/img/amphiebie.png",
    "./asset/img/fennek.png",
    "./asset/img/g36.png",
    "./asset/img/kolone.png",
    "./asset/img/liebe.jpg",
    "./asset/img/perfekt.jpg",
    "./asset/img/soldat.png"
]


pictureRender()


function pictureRender(){
  document.getElementById("picture").innerHTML = `<img src="${picture[0]}" alt="Bild von Bundeswehr Ausrüstung und Fahrzeufgen"></img>`
      let bilder = "";

    for (let i = 0; i < picture.length; i++) {

        bilder += `
            <img src="${picture[i]}" alt="Bild von Fotogram">
        `;
    }

    document.getElementById("picture").innerHTML = bilder;
}
