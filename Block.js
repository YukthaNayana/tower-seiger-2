class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
     World.add(world,this.body);
      this.blockimg=loadImage("block.png");
      this.blockimg.scale=0.5;
    /*  if(this.body.speed < 2){
    super.display();
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);

         pop();
       }*/
       
     }
    
   
   
    display(){
      push ();
      var pos= this.body.position;
      rectMode(TOP);
      rect(pos.x,pos.y,this.width, this.height);
  
      image(this.blockimg,this.body.position.x-16,this.body.position.y-21);
      pop ();
    }
  }