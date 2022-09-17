alert("Hello po")
var hover = [];
var pushHover = 0;

const height = 50;
const width = 150;

const maxHeight= window.innerHeight - height;
const maxWidth= window.innerWidth - width;


var button = document.getElementById("dark");

$("#dark").mouseover(function(){
  hover.push(pushHover);
  pushHover++;


  button.style.left =  Math.floor(Math.random()*(maxWidth)+1) + "px";
  button.style.top =  Math.floor(Math.random()*(maxHeight)+1) + "px";
console.log(hover)
  $("body").addClass("hovered")
 setTimeout(() => {  $("body").removeClass("hovered")
  
 },100);

addImage();
})
function addImage(){
  if(hover[0]===0){
    $("#imga").css("visibility","visible")
    $( "#yes" ).effect( "shake" );
  }
  if(hover[1]===1){
    $("#imge").css("visibility","visible")
    $( "#yes" ).effect( "shake" );
  }
  if(hover[2]===2){
    $("#imgg").css("visibility","visible")
  }
 
  if(hover[3]===3){
    $("#imgb").css("visibility","visible")
  }
  if(hover[4]===4){
    $("#imgc").css("visibility","visible")
  }
  if(hover[5]===5){
    $("#imgd").css("visibility","visible")
  }
  if(hover[6]===6){
    $("#imgf").css("visibility","visible")
    $("#yes").addClass("bigbutton");
    $("#dark").addClass("dark");

    
  }
}


  $("#yes").click(function(){
    alert("IloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyouIloveyou")
  })
  



