'use strict'

let currentRound = 0;
let maxRounds = 25;

function ImageObject(name, filepath) {
    this.name = name;
    this.filepath = filepath;
    this.timesShown = 0;
    this.votes = 0;
    this.shown = 0;
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

    this.shown += 1;
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
    new ImageObject('sweep', 'images/sweep.png');
    new ImageObject('tauntaun', 'images/tauntaun.jpeg');
    new ImageObject('unicorn', 'images/unicorn.jpeg');
    new ImageObject('water-can', 'images/water-can.jpeg');
    new ImageObject('wine-glass', 'images/wine-glass.jpeg');

    // 19 objects
    //render 3 at a time from collection
}

function addEventListeners() {
    // lissen for the cliks
    const containerElem = document.getElementById('product-container');
    containerElem.addEventListener('click', handleClicks);
}

function removeEventListeners() {
    // yeet the event listener
    const containerElem = document.getElementById('product-container');
    containerElem.removeEventListener('click', handleClicks);

}

function handleClicks(event) {

    currentRound += 1;
    // do somethin' with the cliks
    const targetId = event.target.id;

    if(targetId === 'leftImage') {
        ImageObject.left.votes += 1;
    } else if (targetId === 'middleImage') {
        ImageObject.middle.votes += 1;
    } else if (targetId === 'rightImage') {
        ImageObject.right.votes += 1;
    } else {
        alert('Choice not processed!')
        return;
    }
    if (currentRound < maxRounds) {
    pickRandomImg();
    renderImages();
    } else {
        renderList();
        // renderChart();
        removeEventListeners();
    }
}

function renderList() {
    const ulElem = document.getElementById('results-list');
    for(let i = 0; i < ImageObject.all.length; i += 1) {
        const imageInstance = ImageObject.all[i];
        const liElem = document.createElement('li');
        ulElem.append(liElem);
        liElem.textContent = `${imageInstance.name} - votes: ${imageInstance.votes}, shown: ${imageInstance.shown}`;
    }
    document.getElementById('results').hidden = false;

}

// function renderChart() {

//     const imageNamesArray = [];
//     const imageVotesArray = [];
//     const imageShownArray = [];

//     for (let i = 0; i , ImageObject.all.length; i += 1) {
//         const image = ImageObject.all[i];

//         const singleImageName = ImageObject.name;
//         imageNamesArray.push(singleImageName);

//         const singleImageVote = ImageObject.votes;
//         imageVotesArray.push(singleImageVote);

//         const singleShownImage = ImageObject.shown;
//         imageShownArray.push(singleShownImage);
//     }
//     //might need to change id to results-chart-section
//     const ctx = document.getElementById('results-chart').getContext('2d');
//     const imageChart = new Chart(ctx, {
//         type: 'bar',

//         data: {
//             labels: imageNamesArray,
//             datasets: [{
//                 label: 'Image Votes',
//                 backgroundColor: '#2a2a28',
//                 borderColor: '#353831',
//                 data : imageVotesArray,

//                 label: 'Image Shown',
//                 backgroundColor: '#2a2a28',
//                 borderColor: '#353831',
//                 data : imageShownArray,
//             }]
//         },
//         options: {
//             scales: {
//                 yAxes: [{
//                     ticks: {
//                         beginAtZero: true
//                     }
//                 }]
//             }
//         }
//     })
// }

function start() {
    //all systems go mfers
    populatesImages();
    pickRandomImg();
    renderImages();
    addEventListeners();

}

start();

// DONE: we need an allImageObjects list early

// DONE: instantiate ALL early on to create a list to pull from

// let imageObjIndex = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass']

