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
}
