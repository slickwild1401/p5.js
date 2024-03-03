function setup(){
    canvas= createCanvas(280,280) ;
    canvas.center();
    background("white")
    
    }
    function clearCanvas(){
    background("white")
    }
    function preload(){
        
    }
    function draw(){
        strokeWeight(7)
        stroke(0)
        // for drawing line 
        if(mouseIsPressed){
           line( pmouseX, pmouseY, mouseX, mouseY )
        }
        rect(30, 20, 55, 55);
        circle(220, 100, 80);
    }


