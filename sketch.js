var balloon;
var database;
var balloonPosition;

function setup(){
    createCanvas(100,100);   
  



    database = firebase.database()
    balloon = createSprite(250,250,10,10);
    var balloonPosition = database.ref('balloon/position')
    balloonPosition.on("value",read)
    balloon.shapeColor = "red";
}

function draw(){
    background("white");

    

        if(keyDown(LEFT_ARROW)){
        write(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
         write(1,0);
    }
    else if(keyDown(UP_ARROW)){
        write(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
         write(0,+1);
    }
    drawSprites();
}

function read (data){
position = data.val()
balloon.x = position.x
balloon.y = position.y
}

function write (x,y){
database.ref('balloon/position').set({
x: position.x+x,
y: position.y+y
})

}