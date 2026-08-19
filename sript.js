const picture = [
    "./asset/img/planet.jpg",
    "./asset/img/planet.jpg",
    "./asset/img/planet.jpg",
    "./asset/img/planet.jpg",
    "./asset/img/planet.jpg"
]


pictureRender()


function pictureRender(){
  document.getElementById("picture").innerHTML = `<img src="${picture[0]}" alt="Bild von Fotogram"></img>`
      let bilder = "";

    for (let i = 0; i < picture.length; i++) {

        bilder += `
            <img src="${picture[i]}" alt="Bild von Fotogram">
        `;
    }

    document.getElementById("picture").innerHTML = bilder;
}
