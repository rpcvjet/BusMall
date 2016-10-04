var counter = 0;  //click counter set to 0

//this is the array of pictures. I want to push images into arrayOfPictures randomly
var arrayOfPictures = [
   'img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg',
    'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg',  'img/dragon.jpg',
    'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg',  'img/sweep.jpg',
    'img/tauntaun.jpg',  'img/unicorn.jpg', 'img/usb.jpg', 'img/water-can.jpg','img/wine-glass.jpg'
];
//generates random number from 1-19

function randomNumberGenerator () {
  var choiceOne = Math.floor(Math.random() * 19) + 1;
  var choiceTwo = Math.floor(Math.random() * 19) + 1;
  var choiceThree = Math.floor(Math.random() * 19) + 1;

pictureOne = arrayOfPictures[choiceOne] //made new variable that ties into arrayOfPictures. works. comes back with random     path    when i call randomNumberGenerator function.

pictureTwo = arrayOfPictures[choiceTwo]

pictureThree = arrayOfPictures[choiceThree]

}


 function displayImage () {
   randomNumberGenerator();
   var leftImg = document.getElementById('left')
   leftImg.src = pictureOne;

   var centerImg = document.getElementById('center')
   centerImg.src = pictureTwo;

   var rightImg = document.getElementById('right')
   rightImg.src = pictureThree;

 }
displayImage();
