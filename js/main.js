
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
  


var images = ["img/laughing1.jpg", "img/laughing2.jpg", "img/laughing3.jpg"];
var currentIndex = 0;

function changeImage() {
    var img = document.getElementById("myImage");
    img.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

/*document.querySelector('button').addEventListener('click', getAdvice)

function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(res => res.json()) 
        .then(data => {
            console.log(data.slip.advice)
            document.querySelector('.advice').innerText = data.slip.advice
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}*/

/*
//example from the Margarita homework page: 
    
document.querySelector('button').addEventListener('click', getDrink)

function getDrink() {
    let drink = document.querySelector('input').value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) 
    .then(data => {
        console.log(data.drinks)
        document.querySelector('h2').innerText = data.drinks[0].strDrink
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('h3').innerText = data.drinks[0].strInstructions
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
} */

