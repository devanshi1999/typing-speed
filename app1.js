text = document.querySelector('.typedText');

var count=0, count_correct=0;
var wrong, back=0;
var value;

var button = document.getElementById("startTimer");


var type_text=document.getElementById("demo").innerHTML   //string "hi my name is devanshi"




//no. of correct characters inout
var eventHandler = function(e) { 
    e.preventDefault();
}

text.addEventListener('keydown', function(e) {
    var inputKey = e.key;
    
    if((e.key == type_text.charAt(count_correct)) && (count_correct<type_text.length))
    {   
    	text.removeEventListener('keydown', eventHandler);
        count_correct++;
        text.style.background = "rgba(0,255,0,0.7)";
        wrong = false;

    }   
    else {
      
      text.addEventListener('keydown', eventHandler);
      text.style.background = "rgba(255,0,0,0.7)";
      if(e.key == "Backspace") {
      if(wrong == false){
      	wrong=false;
      }
      else{
      wrong = true;}
      }
      else {
      	wrong = true;}
    }
    
    if(wrong==true)
    {
    	if(e.key=="Backspace") {
    		text.removeEventListener('keydown', eventHandler);
    		text.style.background = "rgba(0,255,0,0.7)";
    		wrong = false;
    	}
    	
    }	
    else
    {
    	if(e.key=="Backspace") {
            text.style.background = "rgba(0,255,0,0.7)";
            count_correct--;
    		text.removeEventListener('keydown', eventHandler);
    	}
    }
    if(count_correct <= 0) { 
    	
    	count_correct = 0;
    	text.style.background = "rgba(0,0,0,0)";
    }

    if(count_correct == type_text.length) {
    	stop();
        var speed;
        speed = count_correct/value;
        text.style.visibility = "hidden";
        button.style.visibility = "hidden";
        document.querySelector('.main').innerHTML += "<p>Your typing speed is " + speed + " characters per second</p>";
    	
    }
    if(count_correct > type_text.length){
    	text.addEventListener('keydown', eventHandler);
    }
});

button.addEventListener('click', function(e) {
    e.preventDefault();
    start();
});


function changeValue() {
   ++value;
}

var timerInterval = null;
function start() {
  stop(); // stoping the previous counting (if any)
  value = 0;
  timerInterval = setInterval(changeValue, 1000);  
}
var stop = function() {
  clearInterval(timerInterval);
}




