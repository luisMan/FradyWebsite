    /*coder luis manon */
    
    const col1 = popmotion.styler(document.querySelector('.col-sm-41'));
    const col2 = popmotion.styler(document.querySelector('.col-sm-42'));
    const col3 = popmotion.styler(document.querySelector('.col-sm-43'));
   

    const textCenter =  popmotion.styler(document.querySelector('.text-center')); 
    const textLeft =  popmotion.styler(document.querySelector('.text-left')); 
     //set all to invisible
    document.querySelector('.col-sm-41').style.visibility = "hidden";
    document.querySelector('.col-sm-42').style.visibility = "hidden";
    document.querySelector('.col-sm-43').style.visibility = "hidden";
    document.querySelector('.text-center').style.visibility = "hidden";
    //all projects invisible

    var numOfProjects =  $("#numberOfProjects");
    const projects = $("#projects")[0].children;
  

    for(var i=1; i<=$(numOfProjects).html(); i++){
       document.querySelector('.proj'+i).style.visibility = "hidden";
    }
    document.querySelector('.text-left').style.visibility = "hidden";


    //for the novelty section
    //col1
    function animateNovelty(){
    popmotion.tween({
     from: { x: -300, scale: 1 },
    to: { x: 100, scale: 1 },
    ease: popmotion.easing.easeInOut,
     flip: 0,
     duration: 1000
    }).start(v => col1.set(v));

    //novelty title
    popmotion.tween({
     from: { y: 1700, scale: 1 },
    to: { y: 100, scale: 1 },
    ease: popmotion.easing.easeInOut,
     flip: 0,
     duration: 1000
    }).start(v => textCenter.set(v));

    //col2
    popmotion.tween({
     from: { y: 1700, scale: 1 },
    to: { y: 200, scale: 1 },
    ease: popmotion.easing.easeInOut,
     flip: 0,
     duration: 1000
    }).start(v => col2.set(v));

    //col3
    popmotion.tween({
     from: { x: 1800, scale: 1 },
    to: { x: 0, scale: 1 },
    ease: popmotion.easing.easeInOut,
     flip: 0,
     duration: 1000
    }).start(v => col3.set(v));

    }//close function


    function AnimateProjects(){
        //textleft 
       
       popmotion.tween({
       from: { x: 1600, scale: 1 },
       to: { x: 0, scale: 1 },
       ease: popmotion.easing.easeInOut,
       flip: 0,
       duration: 1000
       }).start(v => textLeft.set(v));
      
       function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
       }


       function animate(i){
       	 var proj = new popmotion.styler(document.querySelector('.proj'+i)); 
       	 document.querySelector('.proj'+i).style.visibility = "visible";
         popmotion.tween({
         from: { y: 1700, scale: 1 },
         to: { y: 0, scale: 1 },
         ease: popmotion.easing.easeInOut,
         flip: 0,
         duration: 150*(getRandomInt(5)+3)
         }).start(v => proj.set(v));
       }
       setTimeout(function () {
       for(var i=1; i<=$(numOfProjects).html(); i++){
           animate(i);
         }
        }, 1000);

       }



    /*============================================================================START ANIMATION WITH SCROLL LISTENER =================================*/

     var isNoveltyAnimated = false;
     var projectsAnimated = false;

      //lets now listen to page scroll 
   $(window).load(function(){
   $(window).scroll(function() {
   if($(window).scrollTop() >= 200) {
   	  
   	   //$("#stats").html("Loading more content..");
   	   //$("#stats").fadeIn(5000).delay(10000);
   	   if(isNoveltyAnimated === false)
   	   {
   	   	  //make all visible
   	   	  document.querySelector('.col-sm-41').style.visibility = "visible";
          document.querySelector('.col-sm-42').style.visibility = "visible";
          document.querySelector('.col-sm-43').style.visibility = "visible";
          document.querySelector('.text-center').style.visibility = "visible";
   	   	  animateNovelty();
          isNoveltyAnimated = true;
   	   }
     
   }else{
   	  //$("#stats").fadeOut(100);
   	  document.querySelector('.col-sm-41').style.visibility = "hidden";
      document.querySelector('.col-sm-42').style.visibility = "hidden";
      document.querySelector('.col-sm-43').style.visibility = "hidden";
      document.querySelector('.text-center').style.visibility = "hidden";
   	  isNoveltyAnimated = false;
   }
   


   //750 height 
   if($(window).scrollTop() >= 2000) {
   	   //$("#stats").html("Loading more content..");
   	   //$("#stats").fadeIn(5000).delay(10000);
   	   if(projectsAnimated === false)
   	   {
   	   	 
  		  document.querySelector('.text-left').style.visibility = "visible";
   	   	  AnimateProjects();
          projectsAnimated = true;
   	   }
     
   }else{
   	  //$("#stats").fadeOut(100);
   	   for(var i=1; i<=$(numOfProjects).html(); i++){
    document.querySelector('.proj'+i).style.visibility = "hidden";
    }
    document.querySelector('.text-left').style.visibility = "hidden";

   	  projectsAnimated = false;
   }
   });
    });
