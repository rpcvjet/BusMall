  'use strict';
  var choiceOne;
  var choiceTwo;
  var choiceThree;
  var pictureOne;
  var pictureTwo;
  var pictureThree;

  var counter = 0;  //click counter set to 0

//this is the array of pictures. I want to push images into arrayOfPictures randomly
  var arrayOfPictures = [
    'img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg',
    'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg',
    'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.jpg',
    'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.jpg', 'img/water-can.jpg','img/wine-glass.jpg'
  ];
//generates random number from 1-19

  function randomNumberGenerator () {
    choiceOne = Math.floor(Math.random() * 19) + 1;
    choiceTwo = Math.floor(Math.random() * 19) + 1;
    choiceThree = Math.floor(Math.random() * 19) + 1;

    pictureOne = arrayOfPictures[choiceOne]; //made new variable that ties into arrayOfPictures. works. comes back with random     path    when i call randomNumberGenerator function.
    pictureTwo = arrayOfPictures[choiceTwo];
    pictureThree = arrayOfPictures[choiceThree];
  }

  function displayImage (){   //function that displays the pictures on page
    randomNumberGenerator();
    var leftImg = document.getElementById('left');
    leftImg.src = pictureOne;

    console.log();

    var centerImg = document.getElementById('center');
    centerImg.src = pictureTwo;


    var rightImg = document.getElementById('right');
    rightImg.src = pictureThree;

  }
  randomNumberGenerator();//calling the function here.
  displayImage(); //calling the function here.

  function iteration (whoDatIs,filepath){   //Constructor : This is the "camera" and "film"
    this.whoDatIs = whoDatIs;
    this.filepath = filepath;
    this.timeClicked = 0;
    this.timesDisplayed = 0;
  }
  // ***************************start the rotation process

  var rotateImages = document.getElementById('wrapper');
  rotateImages.addEventListener('click',changeThePicturesShown);  //this is the clicking of the camera

  function changeThePicturesShown(event) {
    if(event.target.elements.whoDatIs){
      timeClicked += 1;
      timesDisplayed += 1;

      console.log(event.target);
    }
    counter += 1;
  }
changeThePicturesShown();
  // var valueForName = event.target.elements.whoDatIs.value;
  // var valueForFilePath = event.target.elements.filepath.value;
