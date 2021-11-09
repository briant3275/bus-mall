'use strict'

function ImageObject(name, filePath) {
    this.name = name;
    this.filepath = filepath;
    this.timesShown = 0
    ImageObject.all.push(this);
}

ImageObject.all = [];

ImageObject.prototype.render = function (id) {
    const imgElem = document.getElementById(id);
    imgElem.src = this.filepath;
    imgElem.alt = this.name;
}

function renderImage(imageObject, id) {
    const imgElem = document.getElementById(id);
    imgElem.src = imageObject.filepath;
    imgElem.alt = imageObject.name;
}

function renderImages() {
    //render all three images
    //grab first randomly then grab second randomly (select again if second == first)
    //grab third randomly (select again if third == first or second)

    const safeIndices = getRandomIndices();// array of random unique indices

    const leftIndex = safeIndices[0];
    const middleIndex = safeIndices[1];
    const rightIndex = safeIndices[2];


    const leftImageObj = ImageObject.all[leftIndex];
    const middleImageObj = ImageObject.all[middleIndex];
    const rightImageObj = ImageObject.all[rightIndex];

    leftImageObj.render('image-1');
    middleImageObj.render('image-2');
    rightImageObj.render('image-3');
}

function getRandomIndices() {
    let randomImageNum = Math.round(Math.random() * 18)
    console.log(randomImageNum)
}
// DONE: we need an allImageObjects list early

// DONE: instantiate ALL early on to create a list to pull from

let imageObjIndex = ['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','unicorn','water-can','wine-glass']

new ImageObject('bag', 'images/bag.jpeg');
new ImageObject('banana', 'images/banana.jpeg');
new ImageObject('bathroom', 'images/bathroom.jpeg');
new ImageObject('boots', 'images/boots.jpeg');
new ImageObject('breakfast', 'images/breakfast.jpeg');
new ImageObject('bubblegum', 'images/bubblegum.jpeg');
new ImageObject('chair', 'images/chair.jpeg');
new ImageObject('cthulhu', 'images/cthulhu.jpeg');
new ImageObject('dog-duck', 'images/dog-duck.jpeg');
new ImageObject('dragon', 'images/dragon.jpeg');
new ImageObject('pen', 'images/pen.jpeg');
new ImageObject('pet-sweep', 'images/pet-sweep.jpeg');
new ImageObject('scissors', 'images/scissors.jpeg');
new ImageObject('shark', 'images/shark.jpeg');
new ImageObject('sweep', 'images/sweep.jpeg');
new ImageObject('tauntaun', 'images/tauntaun.jpeg');
new ImageObject('unicorn', 'images/unicorn.jpeg');
new ImageObject('water-can', 'images/water-can.jpeg');
new ImageObject('wine-glass', 'images/wine-glass.jpeg');

// 19 objects

// add the rest of the images

renderImages();

renderImage(bag, 'firstImage');







