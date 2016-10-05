  'use strict';
  var choiceOne;
  var choiceTwo;
  var choiceThree;
  var pictureOne;
  var pictureTwo;
  var pictureThree;
  var timeClicked;
  var timesDisplayed;

  var counter = 0;  //click counter set to 0

//generates random number from 1-19

  function randomNumberGenerator () {
    choiceOne = Math.floor(Math.random() * 19) + 1;
    choiceTwo = Math.floor(Math.random() * 19) + 1;
    choiceThree = Math.floor(Math.random() * 19) + 1;

    pictureOne = pictureGallery[choiceOne]; //made new variable that ties into pictureGallery. works. comes back with random     path    when i call randomNumberGenerator function.
    pictureTwo = pictureGallery[choiceTwo];
    pictureThree = pictureGallery[choiceThree];
  }

  var pictureGallery = []; //1. Create empty array

  function Images (filepath, Whodis){   //2. Constructor : Needs to be capital letter
    this.Whodis = Whodis;
    this.filepath = filepath;
    this.timeClicked = 0;
    this.timesDisplayed = 0;
    pictureGallery.push(this);
  }

//3. Then create Object instances
  new Images ('img/bag.jpg', 'bag');
  new Images ('img/banana.jpg', 'banana');
  new Images ('img/bathroom.jpg', 'bathroom');
  new Images ('img/boots.jpg', 'boots');
  new Images ('img/breakfast.jpg', 'breakfast');
  new Images ('img/bubblegum.jpg', 'bubblegum');
  new Images ( 'img/chair.jpg', 'chair');
  new Images ('img/cthulhu.jpg', 'cthulhu');
  new Images ('img/dog-duck.jpg', 'dog-duck');
  new Images ('img/dragon.jpg', 'dragon');
  new Images ('img/pen.jpg', 'pen');
  new Images ('img/pet-sweep.jpg', 'pet-sweep');
  new Images ('img/scissors.jpg', 'scissors');
  new Images ('img/shark.jpg', 'shark');
  new Images ('img/sweep.jpg', 'sweep');
  new Images ('img/tauntaun.jpg', 'tauntaun');
  new Images ('img/unicorn.jpg', 'unicorn');
  new Images ('img/usb.jpg', 'usb');
  new Images ('img/water-can.jpg', 'water-can');
  new Images ('img/wine-glass.jpg', 'wine-glass');


  function displayImage (){   //4. Now Access -- function that displays the pictures on page
    randomNumberGenerator(); //pulling the random number in
    var leftImg = document.getElementById('left');
    leftImg.src = pictureOne.filepath;
    leftImg.alt = pictureOne.Whodis;

    var centerImg = document.getElementById('center');
    centerImg.src = pictureTwo.filepath;
    centerImg.alt = pictureTwo.Whodis;

    var rightImg = document.getElementById('right');
    rightImg.src = pictureThree.filepath;
    rightImg.alt = pictureThree.Whodis;
  }

  displayImage(); //calling the function console.log(rightImg, pictureThree);here.

  // ***************************start the rotation process

  var rotateImages = document.getElementById('wrapper');
  rotateImages.addEventListener('click',changeThePicturesShown);  //this is the clicking of the camera

  function changeThePicturesShown(event) {
    if (event.target.id === 'wrapper'){
      alert('Please click on an image.')
    }

    for (var i = 0; i < pictureGallery.length; i++) {
      if(event.target.alt === pictureGallery[i].Whodis) {
          pictureGallery[i].timeClicked += 1;
          console.log(pictureGallery[i].Whodis + ' has' + pictureGallery[i].timeClicked +  ' clicks');
          displayImage();
        }


    }


    // if(event.target.elements.filename){
    //
    //   console.log(event.target)// }

  }

  // var valueForName = event.target.elements.filename.value;
  // var valueForFilePath = event.target.elements.filepath.value;
