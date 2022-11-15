class Phrase {
  constructor(phrase, hint) {
    this.phrase = phrase;
    this.hint = hint;
  }
}

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

      class ball{
	constructor(x, y, w, r, g, b) {
		this.posX=x
		this.posY=y
		this.w=w
		this.Color=color(r,g,b)
	}

update() {
	  fill(this.Color)
		circle(this.posX,this.posY,this.w)
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

    //face
	face = new ball(width/1.45, height/1.15, 70, 247,250,72)

  //left eye
  leftEye = new ball(width/1.45 - 12, height/1.15 - 10, 70 / 7, 0,0,0)
  //right eye
   rightEye = new ball(width/1.45 + 12, height/1.15 - 10, 70 / 7, 0,0,0)
}

function resetVariables(){
f = 0
  
rightGuess = 0
  
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

  //phrases for easy, normal and hard stages in 1 player
  easyPhrasesOne = [
  new Phrase("forest", "A habitat"),
  new Phrase("salmon", "A fish"),
	 new Phrase("radish", "A vegetable"),
    new Phrase("candle", "A object"),
  new Phrase("turtle", "A reptile"),
	 new Phrase("beaver", "A rodent"),
    new Phrase("waiter", "A job"),
  new Phrase("garlic", "A vegetable"),
	 new Phrase("lawyer", "A job"),
    new Phrase("yogurt", "A dairy product"),
];
  easyIndexOne = Math.floor(random(0, easyPhrasesOne.length))
  easyCurPhraseOne = easyPhrasesOne[easyIndexOne]
  easyGuessOne = []
  easyWrongGuessesOne = []
  for (let e = 0; e < easyCurPhraseOne.phrase.length; e++){
    easyGuessOne.push(easyCurPhraseOne.phrase[e] == " " ? " " : "_")
  }

  normalPhrasesOne = [
  new Phrase("head over heels", "Be in love"),
  new Phrase("happy puppy", "It contains an animal"),
	 new Phrase("as right as rain", "Feeling completely well"),
    new Phrase("cool as a cucumber", "To be very calm and relaxed"),
  new Phrase("eat like a bird", "It contains an animal"),
	 new Phrase("pharmacist", "A job"),
    new Phrase("flamingo", "A bird"),
  new Phrase("bagpipe", "A musical instrument"),
	 new Phrase("hibiscus", "A plant"),
    new Phrase("leukaemia", "A disease"),
];
   normalIndexOne = Math.floor(random(0, normalPhrasesOne.length))
  normalCurPhraseOne = normalPhrasesOne[normalIndexOne]
  normalGuessOne = []
  normalWrongGuessesOne = []
  for (let e = 0; e < normalCurPhraseOne.phrase.length; e++){
    normalGuessOne.push(normalCurPhraseOne.phrase[e] == " " ? " " : "_")
  }
  
  hardPhrasesOne = [
  new Phrase("keep an ear to the ground", ""),
  new Phrase("snug as a bug in a rug", ""),
	 new Phrase("throw caution to the wind", ""),
    new Phrase("flesh and blood", ""),
  new Phrase("bite the bullet", ""),
	 new Phrase("dactylogram", ""),
    new Phrase("bougainvillea", ""),
  new Phrase("ecclesiarch", ""),
	 new Phrase("fabulation", "A plant"),
    new Phrase("jaguarundi", ""),
];
  hardIndexOne = Math.floor(random(0, hardPhrasesOne.length))
  hardCurPhraseOne = hardPhrasesOne[hardIndexOne]
  hardGuessOne = []
  hardWrongGuessesOne = []
  for (let e = 0; e < hardCurPhraseOne.phrase.length; e++){
    hardGuessOne.push(hardCurPhraseOne.phrase[e] == " " ? " " : "_")
  }

  //phrases for easy, normal and hard stages in 2 players
  easyPhrasesTwo = ["space", "biology", "chemistry", "atmosphere"]
  easyIndexTwo = Math.floor(random(0, easyPhrasesTwo.length))
  easyCurPhraseTwo = easyPhrasesTwo[easyIndexTwo]
  easyGuessTwo = []
  easyWrongGuessesTwo = []
  for (let e = 0; e < easyCurPhraseTwo.length; e++){
    easyGuessTwo.push(easyCurPhraseTwo[e] == " " ? " " : "_")
  }
  normalPhrasesTwo = ["space", "biology", "chemistry", "atmosphere"]
  normalIndexTwo = Math.floor(random(0, normalPhrasesTwo.length))
  normalCurPhraseTwo = normalPhrasesTwo[normalIndexTwo]
  normalGuessTwo = []
  normalWrongGuessesTwo = []
  for (let e = 0; e < normalCurPhraseTwo.length; e++){
    normalGuessTwo.push(normalCurPhraseTwo[e] == " " ? " " : "_")
  }
  hardPhrasesTwo = ["space", "biology", "chemistry", "atmosphere"]
  hardIndexTwo = Math.floor(random(0, hardPhrasesTwo.length))
  hardCurPhraseTwo = hardPhrasesTwo[hardIndexTwo]
  hardGuessTwo = []
  hardWrongGuessesTwo = []
  for (let e = 0; e < hardCurPhraseTwo.length; e++){
    hardGuessTwo.push(hardCurPhraseTwo[e] == " " ? " " : "_")
  }
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
	text('High Score: '+easyHighscore , width/3,height/12)  

  face.update()
  leftEye.update()
  rightEye.update()
	showProgress()
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
	text('High Score: '+normalHighscore , width/3,height/12)  

  face.update()
   leftEye.update()
  rightEye.update()
	showProgress()
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
	text('High Score: '+hardHighscore , width/3,height/12)  

  face.update()
   leftEye.update()
  rightEye.update()
	showProgress()
}

function easyTwoPlayers(){
  backDrop()
  fill(0)
  //avatar on the left side
	circle(width/2.65, 513 - 130, 50)
arc(width/2.65,513,80,220,radians(180),radians(360))
  //avatar on the right side
  circle(width/1.6, 513 - 130, 50)
arc(width/1.6,513,80,220,radians(180),radians(360))
  //a line on the center
  rect(width/2, height/1.24, 1, height/3)
}

function normalTwoPlayers(){
  backDrop()
  fill(0)
  //avatar on the left side
	circle(width/2.65, 513 - 130, 50)
arc(width/2.65,513,80,220,radians(180),radians(360))
  //avatar on the right side
  circle(width/1.6, 513 - 130, 50)
arc(width/1.6,513,80,220,radians(180),radians(360))
   //a line on the center
  rect(width/2, height/1.24, 1, height/3)
}

function hardTwoPlayers(){
  backDrop()
  fill(0)
  //avatar on the left side
	circle(width/2.65, 513 - 130, 50)
arc(width/2.65,513,80,220,radians(180),radians(360))
  //avatar on the right side
  circle(width/1.6, 513 - 130, 50)
arc(width/1.6,513,80,220,radians(180),radians(360))
   //a line on the center
  rect(width/2, height/1.24, 1, height/3)
}

function showProgress(){
		switch(f){
			case 0:	
				face = new ball(width/1.45, height/1.15, 70, 247,250,72)
        leftEye = new ball(width/1.45 - 12, height/1.15 - 10, 70 / 7, 0,0,0)
   rightEye = new ball(width/1.45 + 12, height/1.15 - 10, 70 / 7, 0,0,0)
        noFill()
        bezier(width/1.45 - 12, height/1.15 + 10,width/1.45 - 2, height/1.15 + 20,width/1.45 + 2,height/1.15 + 20,width/1.45 + 12, height/1.15 + 10)
				break
			case 1:
				face = new ball(width/1.45, height/1.15, 70, 247,250,72)
        leftEye = new ball(width/1.45 - 12, height/1.15 - 10, 70 / 7, 0,0,0)
   rightEye = new ball(width/1.45 + 12, height/1.15 - 10, 70 / 7, 0,0,0)
        fill(0)
        rect(width/1.45, height/1.15 + 12, 30, 2)
				break
			case 2:
				face = new ball(width/1.45, height/1.15, 70, 62,77,130)
        leftEye = new ball(width/1.45 - 12, height/1.15 - 10, 70 / 7, 0,0,0)
   rightEye = new ball(width/1.45 + 12, height/1.15 - 10, 70 / 7, 0,0,0)
        fill(0)
        rect(width/1.45, height/1.15 + 12, 30, 2)
				break
			case 3:
				face = new ball(width/1.45, height/1.15, 70, 237,69,69)
        leftEye = new ball(width/1.45 - 12, height/1.15 - 10, 70 / 7, 0,0,0)
   rightEye = new ball(width/1.45 + 12, height/1.15 - 10, 70 / 7, 0,0,0)
        noFill()
        bezier(width/1.45 - 12, height/1.15 + 20,width/1.45 - 2, height/1.15 + 10,width/1.45 + 2,height/1.15 + 10,width/1.45 + 12, height/1.15 + 20)
				break
		}
}

function keyPressed(){
  //if spacebar is pressed, pause and restart
	if(menu == 4 || menu == 5 || menu == 6 || menu == 7 || menu == 8 || menu == 9){
  if(keyCode === 32){
    if(currentStatus == true){
      noLoop()
      currentStatus = false
    }else{
      loop()
      currentStatus = true
    }
  }
  //if backspace is pressed, back to home
  if(keyCode === 8){
    menu = 0
  }
  }
  
  if(key >= 'a' && key <= 'z'){
    if(menu == 4){
    
    let easyResultOne = []
    let easyPhraseOne = easyCurPhraseOne.phrase
    for(let e = 0; e < easyPhraseOne.length; e++){
      if(easyPhraseOne[e] === key && easyGuessOne[e] === "_"){
        easyResultOne.push(e)
        easyGuessOne[e] = key
				rightGuess = rightGuess + 1
      }
    }
  if (easyResultOne.length > 0) {
    f = f - 1
		if(f < 0){
				f = 0
			}
		}
		else if(easyWrongGuessesOne.includes(key)){
			textSize(25)
			text("You already guessed that.", width/2, height/1.5);
       easyRemainTime = easyRemainTime - 40
      f = f + 2
			if(f > 4){
				f = 4
			}
		}
		else{
		 easyWrongGuessesOne.push(key)
			textSize(25)
			text("NO MATCH!", width/2, height/1.5)
       easyRemainTime = easyRemainTime - 30
      f = f + 1
			if(f > 4){
				f = 4
			}
		}
  }
  if(menu == 5){
    let normalResultOne = []
    let normalPhraseOne = normalCurPhraseOne.phrase
    for(let e = 0; e < normalPhraseOne.length; e++){
      if(normalPhraseOne[e] === key && normalGuessOne[e] === "_"){
        normalResultOne.push(e)
        normalGuessOne[e] = key
				rightGuess = rightGuess + 1
      }
    }
  if (normalResultOne.length > 0) {
    f = f - 1
		if(f < 0){
				f = 0
			}
		}
		else if(normalWrongGuessesOne.includes(key)){
			textSize(25)
			text("You already guessed that.", width/2, height/1.5);
      normalRemainTime = normalRemainTime - 40
      f = f + 2
			if(f > 4){
				f = 4
			}
		}
		else{
		 normalWrongGuessesOne.push(key)
			textSize(25)
			text("NO MATCH!", width/2, height/1.5)
       normalRemainTime = normalRemainTime - 30
      f = f + 1
			if(f > 4){
				f = 4
			}
		}
  }
    if(menu == 6){
     let hardResultOne = []
    let hardPhraseOne = hardCurPhraseOne.phrase
    for(let e = 0; e < hardPhraseOne.length; e++){
      if(hardPhraseOne[e] === key && hardGuessOne[e] === "_"){
        hardResultOne.push(e)
        hardGuessOne[e] = key
				rightGuess = rightGuess + 1
      }
    }
  if (hardResultOne.length > 0) {
    f = f - 1
		if(f < 0){
				f = 0
			}
		}
		else if(hardWrongGuessesOne.includes(key)){
			textSize(25)
			text("You already guessed that.", width/2, height/1.5);
      hardRemainTime = hardRemainTime - 40
      f = f + 2
			if(f > 4){
				f = 4
			}
		}
		else{
		 hardWrongGuessesOne.push(key)
			textSize(25)
			text("NO MATCH!", width/2, height/1.5)
      hardRemainTime = hardRemainTime - 30
      f = f + 1
			if(f > 4){
				f = 4
			}
		}
}
  }
}

function draw() {
  clear()
  if(menu == 4 || menu == 5 || menu == 6 || menu == 7 || menu == 8 || menu == 9){
	frameRate(1)
	}
  if(menu == 10 || menu == 11 || menu == 12){
    frameRate(30)
  }
  switch(menu){
    case 0: //home
      clear()
      frameRate(30)
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
      fill(0,0,0)
	textSize(50);
	text(easyGuessOne.join(" "), width/2, height/3);
	textSize(20)
      text(`Hint: ${easyCurPhraseOne.hint}`, width/2, height/2 - 20)
	fill(255,0,0)
	text(easyWrongGuessesOne.join(" "), width/2, height/2 + 20)
      if(rightGuess == easyCurPhraseOne.phrase.length){
				menu = 10
			}
      if(easyRemainTime < 1){
        menu = 10
      }
      break
    case 5: //normal mode for 1 player
    clear()
      normalOnePlayer()
      fill(0,0,0)
	textSize(40);
	text(normalGuessOne.join(" "), width/2, height/3);
      if(normalWrongGuessesOne.length > 1){
        fill(0)
        textSize(20)
        text(`Hint: ${normalCurPhraseOne.hint}`, width/2, height/2 - 20)
      }
  textSize(20)
	fill(255,0,0)
	text(normalWrongGuessesOne.join(" "), width/2, height/2 + 20)
      if(rightGuess == normalCurPhraseOne.phrase.length){
				menu = 11
			}
      if(normalRemainTime < 1){
        menu = 11
      }
      break
    case 6: //hard mode for 1 player
     clear()
      hardOnePlayer()
      fill(0,0,0)
	textSize(40);
	text(hardGuessOne.join(" "), width/2, height/3);
	textSize(20)
	fill(255,0,0)
	text(hardWrongGuessesOne.join(" "), width/2, height/2 + 20)
      if(rightGuess == hardCurPhraseOne.phrase.length){
				menu = 12
			}
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