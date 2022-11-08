class button {
	constructor(x,y,w,h,text,r,g,b) {
		this.posX = x
		this.posY = y
		this.w = w
		this.h = h
		this.text = text
		this.Color = color(r,g,b)
		
		this.pressed = false
		this.inside = false
}
	
	update() {  //if cursor is on the button, change colour
		if(mouseX >= this.posX - this.w/2 && mouseX <= this.posX + this.w/2 && mouseY >= this.posY - this.h/2 && mouseY <= this.posY + this.h/2){
			this.inside = true
		}else {
			this.inside = false
		}
		if(this.inside === true && mouseIsPressed === true) {
			this.pressed = true
		}else {
			this.pressed = false
		}
	}
	
	render() {
		if(this.inside === true) {
			fill(255)
		}else {
		fill(this.Color)
		}
    rectMode(CENTER)
		rect(this.posX, this.posY, this.w, this.h)
		textAlign(CENTER,CENTER)
		textSize(20)
		fill(0)
		text(this.text, this.posX, this.posY)
	}
}

class backButton {
  constructor(x,y,Sx,Sy,Tx,Ty,r,g,b) {
		this.posX = x
		this.posY = y
		this.secondPosX = Sx
    this.secondPosY = Sy
    this.thirdPosX = Tx
    this.thirdPosY = Ty
		this.Color = color(r,g,b)
		
		this.pressed = false
		this.inside = false
  }
  update() {  //if cursor is on the button, change colour
		if(mouseX >= this.thirdPosX && mouseX <= this.posX && mouseY >= this.posY && mouseY <= this.secondPosY){
			this.inside = true
		}else {
			this.inside = false
		}
		if(this.inside === true && mouseIsPressed === true) {
			this.pressed = true
		}else {
			this.pressed = false
		}
	}
	
	render() {
		if(this.inside === true) {
			fill(255)
		}else {
		fill(this.Color)
		}
		triangle(this.posX, this.posY, this.secondPosX, this.secondPosY, this.thirdPosX, this.thirdPosY)
	}
}

function backDrop(){
  rectMode(CENTER)
fill(207, 228, 230)
stroke(0)
rect(width/2, height/2, 600, 500)
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(10, 10, 50);
  
menu = 0

  currentStatus = true

  //highscore for easy, normal and hard of 1 player
  easyHighscore = 0
  normalHighscore = 0
  hardHighscore = 0
  
  //buttons on home
	player = new button(width/2, height/1.7, 120, 30, "1 Player",237, 126, 14)
  players = new button(width/2, height/1.5, 120, 30, "2 Players",237, 126, 14)
  instruction = new button(width/2, height/1.34, 120, 30, "Instruction",237, 126, 14)

  //buttons && back button on 1 player
  easyForOnePlayer = new button(width/2 - 140, height/1.5, 120, 30, "Easy",237, 126, 14)
  normalForOnePlayer = new button(width/2, height/1.5, 120, 30, "Normal",237, 126, 14)
  hardForOnePlayer = new button(width/2 + 140, height/1.5, 120, 30, "Hard",237, 126, 14)

  //buttons && back button on 2 players
  easyForTwoPlayers = new button(width/2 - 140, height/1.63, 120, 30, "Easy",237, 126, 14)
  normalForTwoPlayers = new button(width/2, height/1.63, 120, 30, "Normal",237, 126, 14)
  hardForTwoPlayers = new button(width/2 + 140, height/1.63, 120, 30, "Hard",237, 126, 14)

//restart button on result of 1 player's easy stage
  restartEasyForOne = new button (width/2 + 80, height/1.25, 120, 30, "Restart", 237, 126, 14)
  restartNormalForOne = new button (width/2 + 80, height/1.25, 120, 30, "Restart", 237, 126, 14)
  restartHardForOne = new button (width/2 + 80, height/1.25, 120, 30, "Restart", 237, 126, 14)
  
  //back button on 1 player, 2 players and instruction
  back = new backButton (width/3.3, height/12, width/3.3, height/12 + 40, width/3.3 - 40, height/12 + 20, 237, 126, 14)

  //home button on both easy, normal, hard stages of 1 player and 2 players
  home = new button (width/2 - 80, height/1.25, 120, 30, "Home", 237, 126, 14)
}

function resetVariables(){
  //time variables for easy, normal and hard stages on 1 player
  easyTotalTime = 300
  easyRemainTime = easyTotalTime
  normalTotalTime = 240
  normalRemainTime = normalTotalTime
  hardTotalTime = 180
  hardRemainTime = hardTotalTime
  sc_prev = -1

  //score variables
  topScore_time = 100
}

function easyOnePlayer(){
  backDrop() 
  
  //countdown timer for easy stage
	sc = second()
	imin = int(easyRemainTime / 60)
	isec = easyRemainTime % 60
	fill(0)
	textSize(35)
	textAlign(CENTER,CENTER)
	text(imin+':'+isec,width/2,height/8)
	if(sc!=sc_prev){
		sc_prev=sc
		easyRemainTime = easyRemainTime-1
	}

//highscore
	textAlign(CENTER,CENTER)
	stroke(0)
	fill(0)
	textSize(25)
	text('High Score: '+easyHighscore , width/3.1,height/12)  
}

function normalOnePlayer(){
backDrop()
  //countdown timer for normal stage
	sc = second()
	imin = int(normalRemainTime / 60)
	isec = normalRemainTime % 60
	fill(0)
	textSize(35)
	textAlign(CENTER,CENTER)
	text(imin+':'+isec,width/2,height/8)
	if(sc!=sc_prev){
		sc_prev=sc
		normalRemainTime = normalRemainTime-1
	}
  //highscore
	textAlign(CENTER,CENTER)
	stroke(0)
	fill(0)
	textSize(25)
	text('High Score: '+normalHighscore , width/3.1,height/12)  
}

function hardOnePlayer(){
backDrop()
  //countdown timer for easy stage
	sc = second()
	imin = int(hardRemainTime / 60)
	isec = hardRemainTime % 60
	fill(0)
	textSize(35)
	textAlign(CENTER,CENTER)
	text(imin+':'+isec,width/2,height/8)
	if(sc!=sc_prev){
		sc_prev=sc
		hardRemainTime = hardRemainTime-1
	}
  //highscore
	textAlign(CENTER,CENTER)
	stroke(0)
	fill(0)
	textSize(25)
	text('High Score: '+hardHighscore , width/3.1,height/12)  
}

function easyTwoPlayers(){
  backDrop()
}

function normalTwoPlayers(){
  backDrop()
}

function hardTwoPlayers(){
  backDrop()
}

function keyPressed(){
  //if spacebar is pressed, pause and restart
  if(keyCode === 32 && (menu == 4 || menu == 5 || menu == 6 || menu == 7 || menu == 8 || menu == 9)){
    if(currentStatus == true){
      noLoop()
      currentStatus = false
    }else{
      loop()
      currentStatus = true
    }
  }
  //if 'q' is pressed, back to home
  if(keyCode === 81 && (menu == 4 || menu == 5 || menu == 6 || menu == 7 || menu == 8 || menu == 9)){
    menu = 0
  }
}

function draw() {
  clear()
  switch(menu){
    case 0: //home
      clear()
backDrop()
  textAlign(CENTER)
  textSize(50)
  fill(0)
  text("Guess The Phrase", width/2, height/3.5)
      
  player.update()
  player.render()
  players.update()
  players.render()
  instruction.update()
  instruction.render()

      if(player.pressed === true){
        menu = 1
      }
      if(players.pressed === true){
        menu = 2
      }
      if(instruction.pressed === true){
        menu = 3
      }
  break
    case 1: //1 player
    clear()
      backDrop()
      
      textAlign(CENTER)
      textSize(50)
      fill(0)
      text("1 Player", width/2, height/3.5)
      
      easyForOnePlayer.update()
      easyForOnePlayer.render()
      normalForOnePlayer.update()
      normalForOnePlayer.render()
      hardForOnePlayer.update()
      hardForOnePlayer.render()
      back.update()
      back.render()
      
      if(easyForOnePlayer.pressed === true){
        resetVariables()
        menu = 4
      }
      if(normalForOnePlayer.pressed === true){
         resetVariables()
        menu = 5
      }
      if(hardForOnePlayer.pressed === true){
         resetVariables()
        menu = 6
      }
      if(back.pressed === true){
        menu = 0
      }
    break
    case 2: //2 players
      clear()
      backDrop()
      
      textAlign(CENTER)
      textSize(50)
      fill(0)
      text("2 Players", width/2, height/3.5)
      
      easyForTwoPlayers.update()
      easyForTwoPlayers.render()
      normalForTwoPlayers.update()
      normalForTwoPlayers.render()
      hardForTwoPlayers.update()
      hardForTwoPlayers.render()
      back.update()
      back.render()
      
      if(easyForTwoPlayers.pressed === true){
         resetVariables()
        menu = 7
      }
      if(normalForTwoPlayers.pressed === true){
         resetVariables()
        menu = 8
      }
      if(hardForTwoPlayers.pressed === true){
         resetVariables()
        menu = 9
      }
      if(back.pressed === true){
        menu = 0
      }
      break
    case 3: //instruction
      clear()
      backDrop()
      
      textAlign(CENTER)
      textSize(50)
      fill(0)
      text("Instruction", width/2, height/3.5)
      
      back.update()
      back.render()
      
      if(back.pressed === true){
        menu = 0
      }
      break
    case 4: //easy mode for 1 player
     clear()
      easyOnePlayer()
      if(easyRemainTime < 1){
        menu = 10
      }
      break
    case 5: //normal mode for 1 player
    clear()
      normalOnePlayer()
      if(normalRemainTime < 1){
        menu = 11
      }
      break
    case 6: //hard mode for 1 player
     clear()
      hardOnePlayer()
      if(hardRemainTime < 1){
        menu = 12
      }
      break
    case 7: //easy mode for 2 players
      clear()
      easyTwoPlayers()
      break
    case 8: //normal mode for 2 players
      clear()
      normalTwoPlayers()
      break
    case 9: //hard mode for 2 playres
     clear()
      hardTwoPlayers()
      break
    case 10: //result of 1 player's easy stage
     clear()
      backDrop()
      easyScore = easyRemainTime * 100 / topScore_time
      
     if(easyScore < 1) {
       textAlign(CENTER)
      textSize(50)
      fill(0)
      text("Game Over", width/2, height/4)
       textSize(40)
       text('Score: '+easyScore, width/2, height/2)
       home.update()
        home.render()
       restartEasyForOne.update()
       restartEasyForOne.render()
       if(home.pressed === true){
         menu = 0
       }
       if(restartEasyForOne.pressed === true){
         resetVariables()
         menu = 4
       }
     }
      if(easyScore > 1) {
       textAlign(CENTER)
      textSize(50)
      fill(0)
      text("Clear", width/2, height/4)
        textSize(40)
       text('Score: '+easyScore, width/2, height/2)
        home.update()
        home.render()
        restartEasyForOne.update()
       restartEasyForOne.render()
        if(easyHighscore < easyScore){
          easyHighscore = easyScore
        }
         if(home.pressed === true){
         menu = 0
       }
        if(restartEasyForOne.pressed === true){
         resetVariables()
         menu = 4
       }
     }
      break
    case 11: 
      clear()
      backDrop()
     normalScore = normalRemainTime * 100 / topScore_time
      
      if(normalScore < 1) {
       textAlign(CENTER)
      textSize(50)
      fill(0)
      text("Game Over", width/2, height/4)
       textSize(40)
       text('Score: '+normalScore, width/2, height/2)
        home.update()
        home.render()
        restartNormalForOne.update()
       restartNormalForOne.render()
         if(home.pressed === true){
         menu = 0
       }
        if(restartNormalForOne.pressed === true){
         resetVariables()
         menu = 5
       }
     }
      if(normalScore > 1) {
       textAlign(CENTER)
      textSize(50)
      fill(0)
      text("Clear", width/2, height/4)
        textSize(40)
       text('Score: '+normalScore, width/2, height/2)
        home.update()
        home.render()
         restartNormalForOne.update()
       restartNormalForOne.render()
         if(normalHighscore < normalScore){
          normalHighscore = normalScore
        }
         if(home.pressed === true){
         menu = 0
       }
        if(restartNormalForOne.pressed === true){
         resetVariables()
         menu = 5
       }
     }
      break
    case 12:
      clear()
      backDrop()
     hardScore = hardRemainTime * 100 / topScore_time
      
      if(hardScore < 1) {
       textAlign(CENTER)
      textSize(50)
      fill(0)
      text("Game Over", width/2, height/4)
       textSize(40)
       text('Score: '+hardScore, width/2, height/2)
        home.update()
        home.render()
        restartHardForOne.update()
       restartHardForOne.render()
         if(home.pressed === true){
         menu = 0
       }
        if(restartHardForOne.pressed === true){
         resetVariables()
         menu = 6
       }
     }
      if(hardScore > 1) {
       textAlign(CENTER)
      textSize(50)
      fill(0)
      text("Clear", width/2, height/4)
        textSize(40)
       text('Score: '+hardScore, width/2, height/2)
        home.update()
        home.render()
        restartHardForOne.update()
       restartHardForOne.render()
         if(hardHighscore < hardScore){
          hardHighscore = hardScore
        }
         if(home.pressed === true){
         menu = 0
       }
        if(restartHardForOne.pressed === true){
         resetVariables()
         menu = 6
       }
     }
      break
  }
}