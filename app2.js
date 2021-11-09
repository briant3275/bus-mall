Jordan Watts

// // Display 2 photos

// function ImageObject(name, filePath) {
//         this.name = name;
//         this.filePath = filePath;
//         this.timeShown = 0;
//         ImageObject.all.push(this);
// }

// ImageObject.all = [];

// ImageObject.prototype.render = function() {
//     const imgElem = document.getElementById(id);
//     imgElem.src = imageObject.filePath;
//     imgElem.alt = imageObject.name;
// }

const allPics = ["images/bag.jpeg","images/banana.jpeg","images/bathroom.jpeg","images/boot.jpeg","images/breakfast.jpeg","images/bubblegum.jpeg","images/chair.jpeg","images/cthulhu.jpeg","images/dog-duck.jpeg","images/dragon.jpeg","images/pen.jpeg","images/pet-sweep.jpeg","images/scissors.jpeg","images/shark.jpeg","images/sweep.png","images/tauntaun.jpeg","images/unicorn.jpeg","images/water-can.jpeg","images/wine-glass.jpeg"]


const randoNumber1 = Math.round(Math.random() * 18)
const randoNumber2 = Math.round(Math.random() * 18)
const randoNumber3 = Math.round(Math.random() * 18)



actualImage1 = allPics[randoNumber1]; // "img/bag.jpg"
console.log(allPics[randoNumber1])


function changeImage1() {
    var changeImageVar1 = document.getElementById("testImg1")
    document.getElementById("testImg1").src = allPics[randoNumber1]
    document.body.appendChild(changeImageVar1)
}

changeImage1()

function changeImage2() {
    var changeImageVar2 = document.getElementById("testImg2")
    document.getElementById("testImg2").src = allPics[randoNumber2]
    document.body.appendChild(changeImageVar2)
}

changeImage2()

function changeImage3() {
    var changeImageVar3 = document.getElementById("testImg3")
    document.getElementById("testImg3").src = allPics[randoNumber3]
    document.body.appendChild(changeImageVar3)
    
}

changeImage3()

///TODO-
// make displays
//Count total times image has been displayed.
//generate new list on click
//add event listener for clicks