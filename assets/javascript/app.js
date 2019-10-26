var images = ["./assets/images/bootstrap.png", "./assets/images/github-logo.jpg", "./assets/images/logo_JavaScript.png"];
var showImage;
var count = 0;
var downloadTimer;
var timeleft;

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
        document.getElementById("countdown").innerHTML = "Finished"
      }
    }, 1000);


    //  TODO: Increment the count by 1.
    count++;
    displayImage();
    // TODO: Show the loading gif in the "image-holder" div.
    //$("#image-holder").html("<img src='./assets/images/loading.gif' width='200px'/>");
  
    
    // TODO: If the count is the same as the length of the image array, reset the count to 0.
    if (count === images.length) {
      count = 0;
    }
    // TODO: Use a setTimeout to run displayImage after 1 second.
   // setTimeout(displayImage, 1000);
  
  }
  function startSlideshow() {

    // TODO: Use showImage to hold the setInterval to run nextImage.
   // showImage = setInterval(nextImage, 3000);
  
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




  // need to add a countdown timer fucntion
  displayImage();
  
  function myFunction(browser) {
    document.getElementById("result").value = browser;
    console.log("your answer is: " + browser);
    $("#result").text("your answer is: " + browser);
  }
  
