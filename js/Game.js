class Game {
  constructor() {}

  getState(){
    var gameStateRef=database.ref("gameState")
    gameStateRef.on("value",function(data){gameState=data.val()})
  }

  update(state){
    database.ref("/").update({gameState:state})
}

  start() {
    player = new Player();
    playerCount=player.getCount();

    form = new Form();
    form.display();

    car1=createSprite(100,height/2-50)
    car2=createSprite(100,height/2+100)

cars=[car1,car2]
  }

handleElements(){
  form.hide()
  form.titleImg.position(width/2,80) 
  form.titleImg.class("gameTitleAfterEffect")
}

  play(){
    this.handleElements()
    Player.getPlayerInfo()
    if(allPlayers!==undefined){
      image(pista,-width*1,0,width*6,height)
      var index=0;
      for(var plr in allPlayers){
        index=index+1;
        var x = allPlayers[plr].positionX;
        var y = height - allPlayers[plr].positionY;
cars [index-1].position.x=x

        cars[index - 1].position.y = y;
        if(index==player.index){
          fill("blue")
          ellipse(x,y,100,100)
          camera.position.x=cars[index-1].position.x
          camera.position.y=cars[index-1].position.y
        }
      }


      this.handlePayerControls();


      drawSprites()
    }
  }

  handlePayerControls(){
    if(keyIsDown(RIGHT_ARROW)){
      player.positionX+=10
      player.update()
    }
  }
}
