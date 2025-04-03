
var myEase360; 

//Gray set
var vehicleframesTucsonGray1440 = [];
var vehicleframesTucsonGray1024 = [];
var vehicleframesTucsonGray640  = [];
var vehicleframesTucsonGray534  = [];

//Red set
var vehicleframesTucsonRed1440 = [];
var vehicleframesTucsonRed1024 = [];
var vehicleframesTucsonRed640  = [];
var vehicleframesTucsonRed534  = [];

//White set
var vehicleframesTucsonWhite1440 = [];
var vehicleframesTucsonWhite1024 = [];
var vehicleframesTucsonWhite640  = [];
var vehicleframesTucsonWhite534  = [];

//The Current Set
var vehicleframesTucson1440 = [];
var vehicleframesTucson1024 = [];
var vehicleframesTucson640  = [];
var vehicleframesTucson534  = [];


for(let i = 1; i <= 36; i++){

  vehicleframesTucsonRed1440.push("https://s7d1.scene7.com/is/image/hyundai/2025-tucson-hev-blue-awd-ultimate-red-" +  ('000' + i).slice(-3) + "?wid=1440&fmt=webp-alpha");
  vehicleframesTucsonRed1024.push("https://s7d1.scene7.com/is/image/hyundai/2025-tucson-hev-blue-awd-ultimate-red-" +  ('000' + i).slice(-3) + "?wid=1024&fmt=webp-alpha");
  vehicleframesTucsonRed640.push("https://s7d1.scene7.com/is/image/hyundai/2025-tucson-hev-blue-awd-ultimate-red-" +  ('000' + i).slice(-3) + "?wid=640&fmt=webp-alpha");
  vehicleframesTucsonRed534.push("https://s7d1.scene7.com/is/image/hyundai/2025-tucson-hev-blue-awd-ultimate-red-" +  ('000' + i).slice(-3) + "?wid=534&fmt=webp-alpha");

  vehicleframesTucsonGray1440.push("https://s7d1.scene7.com/is/image/hyundai/2025-tucson-hev-blue-awd-amazon-gray-pearl-" +  ('000' + i).slice(-3) + "?wid=1440&fmt=webp-alpha");
  vehicleframesTucsonGray1024.push("https://s7d1.scene7.com/is/image/hyundai/2025-tucson-hev-blue-awd-amazon-gray-pearl-" +  ('000' + i).slice(-3) + "?wid=1024&fmt=webp-alpha");
  vehicleframesTucsonGray640.push("https://s7d1.scene7.com/is/image/hyundai/2025-tucson-hev-blue-awd-amazon-gray-pearl-" +  ('000' + i).slice(-3) + "?wid=640&fmt=webp-alpha");
  vehicleframesTucsonGray534.push("https://s7d1.scene7.com/is/image/hyundai/2025-tucson-hev-blue-awd-amazon-gray-pearl-" +  ('000' + i).slice(-3) + "?wid=534&fmt=webp-alpha");

  vehicleframesTucsonWhite1440.push("https://s7d1.scene7.com/is/image/hyundai/2025-tucson-hev-blue-awd-creamy-white-pearl-" +  ('000' + i).slice(-3) + "?wid=1440&fmt=webp-alpha");
  vehicleframesTucsonWhite1024.push("https://s7d1.scene7.com/is/image/hyundai/2025-tucson-hev-blue-awd-creamy-white-pearl-" +  ('000' + i).slice(-3) + "?wid=1024&fmt=webp-alpha");
  vehicleframesTucsonWhite640.push("https://s7d1.scene7.com/is/image/hyundai/2025-tucson-hev-blue-awd-creamy-white-pearl-" +  ('000' + i).slice(-3) + "?wid=640&fmt=webp-alpha");
  vehicleframesTucsonWhite534.push("https://s7d1.scene7.com/is/image/hyundai/2025-tucson-hev-blue-awd-creamy-white-pearl-" +  ('000' + i).slice(-3) + "?wid=534&fmt=webp-alpha");

}


vehicleframesTucson1440 = vehicleframesTucsonGray1440;
vehicleframesTucson1024 = vehicleframesTucsonGray1024; 
vehicleframesTucson640 = vehicleframesTucsonGray640;
vehicleframesTucson534 = vehicleframesTucsonGray534;


$(function() { 
  
  var detailsHeadline = document.querySelector("h4");
  var detailsCopy = document.querySelector("p");
  var timerSpeed = 500;

    
	myEase360 = $('#myEase360').ease360({
    backgroundSize: "cover-center", 
    preloadSmart : false,  // we don't want to preload the images for this
    startAngle: 60, // angle, not frame where we want to start, it needs to be included in the imagesource set
    damping :  0.925,  // physics adjustment on interactive spin release
    responsive:  [
      {
        breakpoint: 1440,  // 1440 below and above
        frames: vehicleframesTucson1440, 
        flex : {"w" :  true}, 
        width : 1440, // width of the source file set at 1440
        height: 722   // height of the source file set at 1440
      }, 
      {
        breakpoint: 1024,  //  below 1024
        frames: vehicleframesTucson1024, 
        flex : {"w" :  true}, 
        width : 1024,  // width of the source file set at 1024
        height: 534    // height of the source file set at 1024
      }, 
      {
        breakpoint: 640,  //  below 640
        frames: vehicleframesTucson640,
        flex : {"w" :  true},  
        width : 640,   // width of the source file set at 640
        height: 360    // height of the source file set at 640
      }, 
      {
        breakpoint: 534,  //  below 534
        frames: vehicleframesTucson534,
        flex : {"w" :  true},  
        width : 534,   // width of the source file set at 534
        height: 301    // height of the source file set at 534
      }
    ],
    progressUpdate: function() { myProgress(); },
    responsiveUpdate: function() { myResponsiveUpdate(); }
  });


    var responsiveUpdate = false;
    var timer;
    var timerStatus = "timerComplete";
    //keep track of the loaded colors and sets, we only want to show the loader graphic once. This presumes that we are loading the page with gray
    var colorLoadedStatus = { "gray" : true, "red" : false, "white" : false};
    var imageSetsLoadedStatus = { "1440" : false, "1024" :  false, "640" : false, "534" : false};


    function myProgress() {

      //check the status -- if we are preloadSmart then we need to check if its the first 50% we are loading or the second
      var loaderMultiplier = (myEase360.preloadSmart &&  ( myEase360.totalLoaded <= myEase360.frames.length/2) ) ? 2 : 1;
      var v =  Math.floor(myEase360.progress * 100 ) * loaderMultiplier;

      //load is complete
      if (v == 100) {

         //check timer 
         console.log("loading is " + v + " | timerStatus: " + timerStatus);

         if ( timerStatus != "timerComplete") {

            function recheckTimer() {

              // if we have not met the threshold for the miniumn time for the loading graphic, then try again in 50m
              if ( timerStatus != "timerComplete")  {
                console.log("recheckTimer called")
                setTimeout(recheckTimer, 50); 
                return;

              } else {
                 // else we have met the threshold for the miniumn time and we are loaded, so remove the opacity and reset progress
                 $('#loading').removeClass('opacity-1');
                 myEase360.progress = 0;
              }
            }

            recheckTimer();

          }  else {
            $('#loading').removeClass('opacity-1');
            myEase360.progress = 0;
         }
      } 

      let progress =  myEase360.totalLoaded  + " | " + myEase360.frames.length;

    }


    function myResponsiveUpdate() {

      responsiveUpdate = true;

      //reset loader properties
      $('#loading').addClass('opacity-1');

      timerStatus = "timerWorking";
      timer = setTimeout(() => {

        timerStatus = "timerComplete";
        console.log("Delayed for 1 second. TimerStatus: " + timerStatus);

      }, timerSpeed);

    }


    //interactions
    const ease360 = document.querySelector("#myEase360");

    ease360.addEventListener('pointerdown', (e) => {
     
        $("#instructional").addClass('opacity-0');  
    });


     $("button[data-type='color']").click(function() {

      // Code to be executed on click
      changeColor($(this).data('color'));
    });



    //use the 'angleTo' method to animate to the correct angle
    $("button[data-type='angle']").click(function() {
      
      //if we are already in a tween motion, then exit
      if(myEase360.states.engine == true) { return; }

      const currentAngle = myEase360.timeline.angle;
      let destinationAngle = $(this).data('angle');

      //here are the options to get to the destination angle   
      const distanceA = Math.abs(currentAngle - destinationAngle) ;
      const distanceB = Math.abs(currentAngle - (destinationAngle + 360));
      const distanceC = Math.abs((currentAngle + 360 ) - destinationAngle);
      
      //which is the shortest distance to the destination?
      if ( distanceA <=  distanceB && distanceA <=  distanceC ) {
        destinationAngle = destinationAngle;   

      } else if ( distanceB <=  distanceA && distanceB <=  distanceC ) {
        destinationAngle = currentAngle + distanceB;

      } else {
        destinationAngle = currentAngle - distanceC;

      }

      myEase360.angleTo(destinationAngle, 0.75);

    });


    function changeColor(c) {

      if(c == "gray") {
        vehicleframesTucson1440 = vehicleframesTucsonGray1440;
        vehicleframesTucson1024 = vehicleframesTucsonGray1024; 
        vehicleframesTucson640 = vehicleframesTucsonGray640;
        vehicleframesTucson534 = vehicleframesTucsonGray534;

      }
      if(c == "red"){
        vehicleframesTucson1440 = vehicleframesTucsonRed1440;
        vehicleframesTucson1024 = vehicleframesTucsonRed1024; 
        vehicleframesTucson640 = vehicleframesTucsonRed640;
        vehicleframesTucson534 = vehicleframesTucsonRed534;

      }

      if(c == "white"){
        vehicleframesTucson1440 = vehicleframesTucsonWhite1440;
        vehicleframesTucson1024 = vehicleframesTucsonWhite1024; 
        vehicleframesTucson640 = vehicleframesTucsonWhite640;
        vehicleframesTucson534 = vehicleframesTucsonWhite534;

      }

      //if we have already loaded in the the color set, then don't show
      const activeBreakpoint = myEase360.responsive[myEase360.responsiveActive].breakpoint;


      if (!colorLoadedStatus[c]  ) {    

        //reset loader properties
        $('#loading').addClass('opacity-1');

          timerStatus = "timerWorking";
          timer = setTimeout(() => {

            timerStatus = "timerComplete";
            console.log("Delayed for 1 second. TimerStatus: " + timerStatus);

          }, timerSpeed);
       }

      colorLoadedStatus[c] = "loaded";

      //the amount and order of the array being passed should be the same as the 'responsive' in the initialization of the ease360
      myEase360.changeFramesResponsive([vehicleframesTucson1440, vehicleframesTucson1024, vehicleframesTucson640, vehicleframesTucson534]);
            
    }




    var pageInitiate = false;

    window.addEventListener("resize", (event) => { resize(); });


      function resize() {

        let windowWidth = window.innerWidth;
        let activeSet = [];
        let activeBreakpoint;
       
        switch (true) {

          case windowWidth > 1025:
            windowWidth = 1440;
            activeSet = vehicleframesTucson1440;
            activeBreakpoint ="1440"
            break;
          case windowWidth > 641:
            windowWidth = 1024;
            activeSet = vehicleframesTucson1024;
            activeBreakpoint ="1024"
            break;
          case windowWidth > 534:
            windowWidth = 640;
            activeSet = vehicleframesTucson640;
            activeBreakpoint ="640"
            break;
          default:
            windowWidth = 534;
            activeSet = vehicleframesTucson534;
            activeBreakpoint ="534"
            break;
      
        }

         // if the imageset is not active and we are not initializing on page load....
         if ( ! imageSetsLoadedStatus[activeBreakpoint] && pageInitiate) {

            alert(imageSetsLoadedStatus[activeBreakpoint] ); 
            //reset the breakpoints settings - 
            for (let key in colorLoadedStatus) {
              colorLoadedStatus[key] = false;
            }

            for (let key in imageSetsLoadedStatus) {
              imageSetsLoadedStatus[key] = false;
            }

            imageSetsLoadedStatus[activeBreakpoint] = "active";
        }

      }



      //call the resize() on page load
       resize();
       pageInitiate = true;  // page has been loaded



});

    

