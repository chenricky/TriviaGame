var images = ["./assets/images/RedPillBluePill.jpg ", "./assets/images/nemo.jpg", "./assets/images/psycho.jpg"];
var answerArray=["Yes","No","No"];
var showImage;
var count = 0;
var downloadTimer;
var timeleft;
var i;
var browser;

$("#start").click(startSlideshow);
$("#nextQuestion").click(nextImage);

function displayImage() {
    $("#image-holder").html("<img src=" + images[count] + " width='400px'>");

  }

  function nextImage() {
    clearTimeout(downloadTimer);
    //clearTimeout(timeleft);
    var timeleft = 10;
    var downloadTimer = setInterval(function(){
      document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
      timeleft -= 1;
      if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Time is up!"
      }
    }, 1000);

    count++;
    displayImage();

    if (count === images.length) {
      count = 0;
    }

  
  }
  function startSlideshow() {
  
    var timeleft = 10;
    var downloadTimer = setInterval(function(){
      document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
      timeleft -= 1;
      if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Finished"
      }
    }, 1000);


  }
  
  function stopSlideshow() {
  
    clearInterval(showImage);
  
  }
  

  function timer() {
  var timeleft = 10;
  var downloadTimer = setInterval(function(){
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
    timeleft -= 1;
    if(timeleft <= 0){
      clearInterval(downloadTimer);
      document.getElementById("countdown").innerHTML = "Finished"
    }
  }, 1000);
  }


  displayImage();
  
  function myFunction(browser) {
    document.getElementById("result").value = browser;
    console.log("your answer is: " + browser);
    $("#result").text("your answer is: " + browser);
  }
  
