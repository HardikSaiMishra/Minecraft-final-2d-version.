var canvas = new fabric.Canvas('myCanvas');
 
player_x = 10;
player_y = 10;
 
block_image_width = 30;
block_image_height = 30;
 
var player_object = "";
var block_image_object = "";
 
 
 
 
 
function player_update() {
 
   fabric.Image.fromURL("player.png", function (Img) {  // store image in variable
 
       player_object = Img;
 
       player_object.scaleToWidth(150);
       player_object.scaleToHeight(140);
 
       player_object.set({
           top: player_y,
           left: player_x
       });
       canvas.add(player_object);
 
   });
}
 
function block_update(block) {
 
    fabric.Image.fromURL(block, function (Img) {  // store image in variable
  
        block_object = Img;
  
        block_object.scaleToWidth(block_image_width);
        block_object.scaleToHeight(block_image_height);
  
        block_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_object);
  
    });
 }
 window.addEventListener("keydown", my_keydown);
 
function my_keydown(e)
{
 
keyPressed = e.keyCode;
 
 
 
if(keyPressed == '38')
   {
       up();
  
   }
 
 
 
   if(keyPressed == '37')
   {
       left();
  
   }
   if(keyPressed == '39')
   {
       right();
  
   }
 
   if(keyPressed == '40')
   {
       down();
  
   }
 
   if(keyPressed == '87')
   {
       block_update('wall.jpg');
      
   }
   if(keyPressed == '67')
   {
       block_update('cloud.jpg');
      
   }
   if(keyPressed == '68')
   {
       block_update('dark_green.png');
      
   }
   if(keyPressed == '71')
   {
       block_update('ground.png');
      
   }
   if(keyPressed == '76')
   {
       block_update('light_green.png');
      
   }
   if(keyPressed == '82')
   {
       block_update('roof.jpg');
      
   }
   if(keyPressed == '84')
   {
       block_update('trunk.jpg');
      
   }
   
      
  
   if(keyPressed == '67')
   {
       block_update('unique.png');
      
   }
   if(keyPressed == '89')
   {
       block_update('yellow_wall.png');
      
   }
// other keys
 
 
if(e.shiftKey == true && keyPressed == '80')
{
   block_image_width = block_image_width + 10;
   block_image_height = block_image_height + 10;
 
 
   document.getElementById("width").innerHTML = block_image_width;
   document.getElementById("Height").innerHTML = block_image_height;  
}
if(e.shiftKey == true && keyPressed == '77')
{
   block_image_width = block_image_width - 10;
   block_image_height = block_image_height - 10;
 
 
   document.getElementById("width").innerHTML = block_image_width;
   document.getElementById("Height").innerHTML = block_image_height;  
}
// shift and m 
 
}
function up()
{
   if(player_y >=0)
   {
       player_y = player_y - block_image_height;
 
 
       canvas.remove(player_object);
      
      player_update();
   }
}
 
 
function down()
{
   if(player_y <=500)
   {
       player_y = player_y + block_image_height;
 
 
       canvas.remove(player_object);
      
      player_update();
   }
}

function left()
{
   if(player_x >=800)
   {
       player_x = player_x - block_image_width;
 
 
       canvas.remove(player_object);
      
      player_update();
   }
}
 
 
function right()
{
   if(player_x <=800)
   {
       player_x = player_x+ block_image_width;
 
 
       canvas.remove(player_object);
      
      player_update();
   }
}

 
 


