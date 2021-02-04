console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function () {
  fetchImages(); 
  // loadBreedOptions();
  fetchBreeds();
});

function fetchImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
    fetch(imgUrl)
    .then(response => response.json())
    .then(json => {
        json.message.forEach(img => renderImages(img))
    });
}

function renderImages(breedImages) {
  const container = document.getElementById("dog-image-container");
  const newImg = document.createElement('img');
  newImg.src = breedImages;
  container.appendChild(newImg);
}



function fetchBreeds() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  let allBreeds = []
  const dogBreedUl = document.getElementById('dog-breeds')
  fetch(breedUrl)
  .then(res => res.json())
  .then(json => {
    allBreeds = Object.keys(json.message)
    //debugger
    console.log(allBreeds) // helps check if all breeds are being received
    dogBreedUl.innerHTML = createDogList(allBreeds)
  });
}

function createDogList(dogBreeds) {
  const dogLiArray = dogBreeds.map(function(breed) {
    return `<li>${breed}</li>`
  })
  return dogLiArray.join('')

}

//.addEventListener('click', addColor)

//trying to make this work...

function addColor(event) {
  const needs = document.getElementById('#dog-breeds')
  // debugger
  needs.forEach(function(need) {
    need.addEventListener('click', updateColor())
  })
  
}

function updateColor(event) {
  event.target.style.color = 'palevioletred';
}