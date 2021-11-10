'use strict'

function ImageObject(name, filepath) {
    this.name = name;
    this.filepath = filepath;
    this.timesShown = 0;
    this.votes = 0;
    ImageObject.all.push(this);
}

ImageObject.all = [];
ImageObject.left = null;
ImageObject.middle = null;
ImageObject.right = null;


ImageObject.prototype.render = function (side) {
    const imgElem = document.getElementById(side + 'Image');
    imgElem.src = this.filepath;
    imgElem.alt = this.name;

    const captionElem = document.getElementById(side + '-caption');
    captionElem.textContent = this.name;
}

// functions below
function getRandomImg() {
    let randomImageNum = Math.floor(Math.random() * ImageObject.all.length);
    return ImageObject.all[randomImageNum];
    
}

function pickRandomImg() {
    // let randomImageNum = Math.round(Math.random() * 18);
    ImageObject.left = getRandomImg();

    do {
        ImageObject.middle =  getRandomImg();
    } while(ImageObject.left === ImageObject.middle);

    do {
        ImageObject.right = getRandomImg();
    } while((ImageObject.left === ImageObject.right) || (ImageObject.middle === ImageObject.right));


}

// render for single image, get rid of onces multiple render works
// function renderImage(imageObject, id) {
//     const imgElem = document.getElementById(id);
//     imgElem.src = imageObject.filepath;
//     imgElem.alt = imageObject.name;
// }

function renderImages() {
    //render all three images
    ImageObject.left.render('left');
    ImageObject.middle.render('middle');
    ImageObject.right.render('right');

    // array of random unique indices

}

function populatesImages() {

    //instantiates all img instances
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
    //render 3 at a time from collection
}

function addEventListeners() {
    // lissen fo da cliks
}

function removeEventListeners() {
    // yeet da event lissner

}

function handleClicks() {
    // do sumn wit da cliks
}

function renderList() {

}

function start() {
    //all systems go mfers
    populatesImages();
    pickRandomImg();
    renderImages();

}

start();

// DONE: we need an allImageObjects list early

// DONE: instantiate ALL early on to create a list to pull from

// let imageObjIndex = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass']

