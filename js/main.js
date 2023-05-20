
document.querySelector('button').addEventListener('click', function() {
    getJoke();
    changeImage();
});

function getJoke() {
    const url = 'https://icanhazdadjoke.com/';
  
    fetch(url, {
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('h2').innerText = data.joke;
      })
      .catch(err => {
        console.log(`error ${err}`);
      });
}
  


var images = ["img/dad02.jpg", "img/dad03.jpg", "img/dad04.jpg", "img/dad05.jpg", "img/dad01.jpg"];
var currentIndex = 0;

function changeImage() {
    var img = document.getElementById("myImage");
    img.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

