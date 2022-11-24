class Phrase {
  constructor(phrase, hint, secHint) {
    this.phrase = phrase;
    this.hint = hint;
    this.secHint = secHint
  }
}

class snow{
constructor(x, y, ySpeed, w, r, g, b, s){
		this.x = x
		this.y = y
		this.ySpeed = ySpeed
		this.w = w
		this.Color = color(r,g,b)
  this.s = s
	}
	fall(){
		this.y += this.ySpeed
		stroke(this.s)
		fill(this.Color)
		circle(this.x, this.y, this.w)
		if(this.y > height/2 + 230){
			this.y = height/2 - 230
      this.x = random(width/2 - 280, width/2 + 280)
		}
	}
}

class leftRain{
	constructor(x, y, w, h, ySpeed, Stroke){
		this.x = x
		this.y = y
		this.w = w
		this.h = h
		this.ySpeed = ySpeed
		this.Stroke = Stroke
	}
	fall(){
		this.y+=this.ySpeed
		stroke(this.Stroke)
		rect(this.x, this.y, this.w, this.h)
		if(this.y > height/2 + 95){
			this.y = height/2 - 25
      this.x = random(width/2 - 100, width/2 - 200)
		}
	}
}

class rightRain{
	constructor(x, y, w, h, ySpeed, Stroke){
		this.x = x
		this.y = y
		this.w = w
		this.h = h
		this.ySpeed = ySpeed
		this.Stroke = Stroke
	}
	fall(){
		this.y+=this.ySpeed
		stroke(this.Stroke)
		rect(this.x, this.y, this.w, this.h)
		if(this.y > height/2 + 95){
			this.y = height/2 - 25
      this.x = random(width/2 + 100, width/2 + 200)
		}
	}
}

class leftBalloon{
	constructor(x, y, w, h, ySpeed, r,g,b){
		this.x = x
		this.y = y
		this.w = w
		this.h = h
		this.ySpeed = ySpeed
		this.Color = color(r,g,b)
	}
	up(){
		this.y -= this.ySpeed
		fill(this.Color)
		noStroke()
		ellipse(this.x, this.y, this.w, this.h)
		triangle(this.x, this.y + this.h / 2, this.x + 10, this.y + (this.h / 2 + 10), this.x - 10, this.y + (this.h / 2 + 10))
		if(this.y < height/2 - 65){
			this.y = height/2 + 65
      this.x = random(width/2 - 60, width/2 - 240)
		}
	}
}

class rightBalloon{
	constructor(x, y, w, h, ySpeed, r,g,b){
		this.x = x
		this.y = y
		this.w = w
		this.h = h
		this.ySpeed = ySpeed
		this.Color = color(r,g,b)
	}
	up(){
		this.y -= this.ySpeed
		fill(this.Color)
		noStroke()
		ellipse(this.x, this.y, this.w, this.h)
		triangle(this.x, this.y + this.h / 2, this.x + 10, this.y + (this.h / 2 + 10), this.x - 10, this.y + (this.h / 2 + 10))
		if(this.y < height/2 - 65){
			this.y = height/2 + 65
      this.x = random(width/2 + 60, width/2 + 240)
		}
	}
}



class button {
	constructor(x,y,w,h,text,r,g,b,s) {
		this.posX = x
		this.posY = y
		this.w = w
		this.h = h
		this.text = text
		this.Color = color(r,g,b)
    this.s = s
		
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
      stroke(this.s)
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

   class pigNose{
	constructor(x, y, radius, w, h, r,g,b,s){
		this.x = x
		this.y = y
		this.radius = radius
		this.w = w
		this.h = h
		this.Color = color(r,g,b)
		this.stroke = s
	}
	update(){
		fill(this.Color)
		stroke(this.stroke)
		ellipse(this.x, this.y, this.w, this.h)
		circle(this.x - this.h / 3, this.y, this.radius)
		circle(this.x + this.h / 3, this.y, this.radius)
	}
}

      class mustache{
	constructor(x,y,secX,secY,tX,tY,fX,fY,r,g,b,s){
		this.x = x
		this.y = y
		this.secX = secX
		this.secY = secY
		this.tX = tX
		this.tY = tY
		this.fX = fX
		this.fY = fY
		this.Color = color(r,g,b)
		this.Stroke = s
	}
	update(){
		fill(this.Color)
		stroke(this.Stroke)
		bezier(this.x + 10, this.y, this.secX + 20, this.secY, this.tX + 40, this.tY + 20, this.fX + 40, this.fY + 20)
		bezier(this.x - 10, this.y, this.secX - 20, this.secY, this.tX - 40, this.tY + 20, this.fX - 40, this.fY + 20)
	}
}

      class snot{
	constructor(x,y,w,h,r,g,b,s){
		this.x = x
		this.y = y
		this.w = w
		this.h = h
		this.Color = color(r,g,b)
		this.stroke = s
	}
	update(){
		fill(this.Color)
		stroke(this.stroke)
		ellipse(this.x, this.y, this.w, this.h)
		triangle(this.x - this.w / 2, this.y, this.x, this.y - this.h, this.x + this.w / 2, this.y)
	}
}

class iceCream{
	constructor(x,y,radius,r,g,b,secR,secG,secB){
		this.x = x
		this.y = y
		this.radius = radius
		this.Color = color(r,g,b)
		this.secColor = color(secR,secG,secB)
	}
	update(){
		noStroke()
		fill(this.Color)
		triangle(this.x, this.y, this.x + 30, this.y + 60,this.x + 50,this.y + 40)
		fill(this.secColor)
		circle(this.x + 40, this.y + 50, this.radius)
		circle(this.x + 45,this.y + 35,this.radius/2)
			circle(this.x + 40,this.y + 40,this.radius/2)
		circle(this.x + 30,this.y + 45,this.radius/2)
		circle(this.x + 25, this.y + 55,this.radius/2)
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

  easyLeftTurn = true
  normalLeftTurn = true
  hardLeftTurn = true
  gradeOneLeftTurn = true

  //highscore for easy, normal and hard of 1 player
  easyHighscore = 0
  normalHighscore = 0
  hardHighscore = 0
  gradeOneHighscore = 0
  
  //buttons on home
	player = new button(width/2, height/1.7, 120, 30, "1 Player",237, 126, 14, 0)
  players = new button(width/2, height/1.5, 120, 30, "2 Players",237, 126, 14, 0)
  instruction = new button(width/2, height/1.34, 120, 30, "Instruction",237, 126, 14, 0)

  //buttons on 1 player
  easyForOnePlayer = new button(width/2 - 140, height/1.5, 120, 30, "Easy",237, 126, 14, 0)
  normalForOnePlayer = new button(width/2, height/1.5, 120, 30, "Normal",237, 126, 14, 0)
  hardForOnePlayer = new button(width/2 + 140, height/1.5, 120, 30, "Hard",237, 126, 14, 0)
  gradeOnePlayer = new button (width/2, height/1.5 - 70, 120, 30, "Grade 1", 237, 126, 14, 0)

  //buttons on 2 players
  easyForTwoPlayers = new button(width/2 - 140, height/1.63, 120, 30, "Easy",237, 126, 14, 0)
  normalForTwoPlayers = new button(width/2, height/1.63, 120, 30, "Normal",237, 126, 14, 0)
  hardForTwoPlayers = new button(width/2 + 140, height/1.63, 120, 30, "Hard",237, 126, 14, 0)
  gradeOnePlayers = new button (width/2, height/1.63 - 50, 120, 30, "Grade 1", 237, 126, 14, 0)

//restart button on result of 1 player's easy, normal, hard and grade 1 stages
  restartEasyForOne = new button (width/2 + 80, height/1.25, 120, 30, "Restart", 237, 126, 14, 0)
  restartNormalForOne = new button (width/2 + 80, height/1.25, 120, 30, "Restart", 237, 126, 14, 0)
  restartHardForOne = new button (width/2 + 80, height/1.25, 120, 30, "Restart", 237, 126, 14, 0)
  restartGradeOneP = new button (width/2 + 80, height/1.25, 120, 30, "Restart", 237, 126, 14, 0)

  //restart button on result of 2 players' easy, normal, hard and grade 1 stages
  restartEasyForTwo = new button (width/2 + 80, height/1.25, 120, 30, "Restart", 237, 126, 14, 0)
  restartNormalForTwo = new button (width/2 + 80, height/1.25, 120, 30, "Restart", 237, 126, 14, 0)
  restartHardForTwo = new button (width/2 + 80, height/1.25, 120, 30, "Restart", 237, 126, 14, 0)
  restartGradeOnePs = new button (width/2 + 80, height/1.25, 120, 30, "Restart", 237, 126, 14, 0)
  
  //back button on 1 player, 2 players and instruction
  back = new backButton (width/3.3, height/12, width/3.3, height/12 + 40, width/3.3 - 40, height/12 + 20, 237, 126, 14)

  //home button on both easy, normal, hard stages of 1 player and 2 players
  home = new button (width/2 - 80, height/1.25, 120, 30, "Home", 237, 126, 14, 0)

    //face
	face = new ball(width/1.45, height/1.15, 70, 247,250,72)

  //left eye
  leftEye = new ball(width/1.45 - 12, height/1.15 - 10, 70 / 7, 0,0,0)
  //right eye
   rightEye = new ball(width/1.45 + 12, height/1.15 - 10, 70 / 7, 0,0,0)

  //snow on result of 1 player's grade 1 stage
  s = new snow(random(width/2 - 280, width/2 + 280), random(height/2 - 230, height/2 + 230), 2, 20, 255, 255, 255, 255)
	s1 = new snow(random(width/2 - 280, width/2 + 280), random(height/2 - 230, height/2 + 230), 2, 20, 255, 255, 255, 255)
	s2 = new snow(random(width/2 - 280, width/2 + 280), random(height/2 - 230, height/2 + 230), 2, 20, 255, 255, 255, 255)
	s3 = new snow(random(width/2 - 280, width/2 + 280), random(height/2 - 230, height/2 + 230), 2, 20, 255, 255, 255, 255)
	s4 = new snow(random(width/2 - 280, width/2 + 280), random(height/2 - 230, height/2 + 230), 2, 20, 255, 255, 255, 255)
	s5 = new snow(random(width/2 - 280, width/2 + 280), random(height/2 - 230, height/2 + 230), 2, 20, 255, 255, 255, 255)
	s6 = new snow(random(width/2 - 280, width/2 + 280), random(height/2 - 230, height/2 + 230), 2, 20, 255, 255, 255, 255)
	s7 = new snow(random(width/2 - 280, width/2 + 280), random(height/2 - 230, height/2 + 230), 2, 20, 255, 255, 255, 255)
	s8 = new snow(random(width/2 - 280, width/2 + 280), random(height/2 - 230, height/2 + 230), 2, 20, 255, 255, 255, 255)

  //rain on result of 2 players' grade 1 stage
  //left
  leftR1 = new leftRain (random(width/2 - 100, width/2 - 200), random(height/2 - 25, height/2 + 95), 0.5, 30, 2, 150)
   leftR2 = new leftRain (random(width/2 - 100, width/2 - 200), random(height/2 - 25, height/2 + 95), 0.5, 30, 2, 150)
   leftR3 = new leftRain (random(width/2 - 100, width/2 - 200), random(height/2 - 25, height/2 + 95), 0.5, 30, 2, 150)
   leftR4 = new leftRain (random(width/2 - 100, width/2 - 200), random(height/2 - 25, height/2 + 95), 0.5, 30, 2, 150)
  leftR5 = new leftRain (random(width/2 - 100, width/2 - 200), random(height/2 - 25, height/2 + 95), 0.5, 30, 2, 150)
  leftR6 = new leftRain (random(width/2 - 100, width/2 - 200), random(height/2 - 25, height/2 + 95), 0.5, 30, 2, 150)
  leftR7 = new leftRain (random(width/2 - 100, width/2 - 200), random(height/2 - 25, height/2 + 95), 0.5, 30, 2, 150)
  //right
   rightR1 = new rightRain (random(width/2 + 100, width/2 + 200), random(height/2 - 25, height/2 + 95), 0.5, 30, 2, 150)
   rightR2 = new rightRain (random(width/2 + 100, width/2 + 200), random(height/2 - 25, height/2 + 95), 0.5, 30, 2, 150)
   rightR3 = new rightRain (random(width/2 + 100, width/2 + 200), random(height/2 - 25, height/2 + 95), 0.5, 30, 2, 150)
   rightR4 = new rightRain (random(width/2 + 100, width/2 + 200), random(height/2 - 25, height/2 + 95), 0.5, 30, 2, 150)
  rightR5 = new rightRain (random(width/2 + 100, width/2 + 200), random(height/2 - 25, height/2 + 95), 0.5, 30, 2, 150)
  rightR6 = new rightRain (random(width/2 + 100, width/2 + 200), random(height/2 - 25, height/2 + 95), 0.5, 30, 2, 150)
  rightR7 = new rightRain (random(width/2 + 100, width/2 + 200), random(height/2 - 25, height/2 + 95), 0.5, 30, 2, 150)

  //balloons on the result of 2 players' grade 1 stage
  //left
  leftB1 = new leftBalloon(random(width/2 - 60, width/2 - 240), random(height/2 - 25, height/2 + 95), 40, 40, 2, random(100,500), random(100, 500), random(100, 500))
  leftB2 = new leftBalloon(random(width/2 - 60, width/2 - 240), random(height/2 - 25, height/2 + 95), 40, 40, 2, random(100,500), random(100, 500), random(100, 500))
  leftB3 = new leftBalloon(random(width/2 - 60, width/2 - 240), random(height/2 - 25, height/2 + 95), 40, 40, 2, random(100, 500), random(100, 500), random(100, 500))
   leftB4 = new leftBalloon(random(width/2 - 60, width/2 - 240), random(height/2 - 25, height/2 + 95), 40, 40, 2, random(100,500), random(100, 500), random(100, 500))
  //right
   rightB1 = new rightBalloon(random(width/2 + 60, width/2 + 240), random(height/2 - 25, height/2 + 95), 40, 40, 2, random(100,500), random(100, 500), random(100, 500))
  rightB2 = new rightBalloon(random(width/2 + 60, width/2 + 240), random(height/2 - 25, height/2 + 95), 40, 40, 2, random(100,500), random(100, 500), random(100, 500))   
    rightB3 = new rightBalloon(random(width/2 + 60, width/2 + 240), random(height/2 - 25, height/2 + 95), 40, 40, 2, random(100,500), random(100, 500), random(100, 500))
   rightB4 = new rightBalloon(random(width/2 + 60, width/2 + 240), random(height/2 - 25, height/2 + 95), 40, 40, 2, random(100,500), random(100, 500), random(100, 500))

  //pig nose
  rightPig = new pigNose(width/2 + 148, height/2 + 185, 3, 15, 10, 255,255,255,0)
  leftPig = new pigNose(width/2 - 148, height/2 + 185, 3, 15, 10, 255,255,255,0)

  //mustache
  rightM = new mustache(width/2 + 148, height/2 + 185, width/2 + 148, height/2 + 185, width/2 + 148, height/2 + 185, width/2 + 148, height/2 + 185, 255,255,255,255)
  leftM = new mustache(width/2 - 148, height/2 + 185, width/2 - 148, height/2 + 185, width/2 - 148, height/2 + 185, width/2 - 148, height/2 + 185, 255,255,255,255)

  //snot
  leftSnot = new snot(width/2 - 144, height/2 + 210, 5, 25, 255,255,255,255)
  rightSnot = new snot(width/2 + 152, height/2 + 210, 5, 25, 255,255,255,255)

//ice cream
  leftI = new iceCream(width/2 - 195, height/2 + 110, 25, 208, 139, 0, 254, 252, 207)
  rightI = new iceCream(width/2 + 98, height/2 + 110, 25, 208, 139, 0, 254, 252, 207)
}

function resetVariables(){
f = 0

  Ld = 0
  Rd = 0

  ELr = 50
ERr = 50
	NLr = 50
NRr = 50
	HLr = 50
HRr = 50
  GLr = 50
GRr = 50
	
ELh = 220
ERh = 220
	NLh = 220
NRh = 220
	HLh = 220
HRh = 220
  	GLh = 220
GRh = 220
	
	ELy = 513 - 130
ERy = 513 - 130
	NLy = 513 - 130
NRy = 513 - 130
	HLy = 513 - 130
HRy = 513 - 130
  	GLy = 513 - 130
GRy = 513 - 130
	
	ELscore = 0
	ERscore = 0
  NLscore = 0
	NRscore = 0
  HLscore = 0
	HRscore = 0
  GLscore = 0
	GRscore = 0
  
easyRightGuessOne = 0
  normalRightGuessOne = 0
  hardRightGuessOne = 0
  gradeOneRightGuess = 0
  
  easyRightGuessTwo = 0
  normalRightGuessTwo = 0
  hardRightGuessTwo = 0
  gradeOneRightGuessTwo = 0
  
  //time variables for easy, normal and hard stages on 1 player
  easyTotalTime = 300
  easyRemainTime = easyTotalTime
  normalTotalTime = 270
  normalRemainTime = normalTotalTime
  hardTotalTime = 210
  hardRemainTime = hardTotalTime
  gradeOneTotalTime = 300
  gradeOneRemainTime = gradeOneTotalTime
  sc_prev = -1

  //score variables
  topScore_time = 100

  //phrases for easy, normal, hard and grade 1 stages in 1 player
  easyPhrasesOne = [
  new Phrase("forest", "A habitat", ""),
  new Phrase("salmon", "A fish", ""),
	 new Phrase("radish", "A vegetable", ""),
    new Phrase("candle", "A object", ""),
  new Phrase("turtle", "A reptile", ""),
	 new Phrase("beaver", "A rodent", ""),
    new Phrase("waiter", "A job", ""),
  new Phrase("garlic", "A vegetable", ""),
	 new Phrase("lawyer", "A job", ""),
    new Phrase("yogurt", "A dairy product", ""),
];
  easyIndexOne = Math.floor(random(0, easyPhrasesOne.length))
  easyCurPhraseOne = easyPhrasesOne[easyIndexOne]
  easyGuessOne = []
  easyWrongGuessesOne = []
  for (let e = 0; e < easyCurPhraseOne.phrase.length; e++){
    easyGuessOne.push(easyCurPhraseOne.phrase[e] == " " ? " " : "_")
    if(easyCurPhraseOne.phrase[e] == " "){
			easyRightGuessOne = easyRightGuessOne + 1
		}
  }

  normalPhrasesOne = [
  new Phrase("head over heels", "Be in love", ""),
  new Phrase("happy puppy", "It contains an animal", ""),
	 new Phrase("as right as rain", "Feeling completely well", ""),
    new Phrase("cool as a cucumber", "To be very calm and relaxed", ""),
  new Phrase("eat like a bird", "It contains an animal", ""),
	 new Phrase("pharmacist", "A job", ""),
    new Phrase("flamingo", "A bird", ""),
  new Phrase("bagpipe", "A musical instrument", ""),
	 new Phrase("hibiscus", "A plant", ""),
    new Phrase("leukaemia", "A disease", ""),
];
   normalIndexOne = Math.floor(random(0, normalPhrasesOne.length))
  normalCurPhraseOne = normalPhrasesOne[normalIndexOne]
  normalGuessOne = []
  normalWrongGuessesOne = []
  for (let e = 0; e < normalCurPhraseOne.phrase.length; e++){
    normalGuessOne.push(normalCurPhraseOne.phrase[e] == " " ? " " : "_")
    if(normalCurPhraseOne.phrase[e] == " "){
			normalRightGuessOne = normalRightGuessOne + 1
		}
  }
  
  hardPhrasesOne = [
  new Phrase("keep an ear to the ground", "", ""),
  new Phrase("snug as a bug in a rug", "", ""),
	 new Phrase("throw caution to the wind", "", ""),
    new Phrase("flesh and blood", "", ""),
  new Phrase("bite the bullet", "", ""),
	 new Phrase("dactylogram", "", ""),
    new Phrase("bougainvillea", "", ""),
  new Phrase("ecclesiarch", "", ""),
	 new Phrase("fabulation", "", ""),
    new Phrase("jaguarundi", "", ""),
];
  hardIndexOne = Math.floor(random(0, hardPhrasesOne.length))
  hardCurPhraseOne = hardPhrasesOne[hardIndexOne]
  hardGuessOne = []
  hardWrongGuessesOne = []
  for (let e = 0; e < hardCurPhraseOne.phrase.length; e++){
    hardGuessOne.push(hardCurPhraseOne.phrase[e] == " " ? " " : "_")
    if(hardCurPhraseOne.phrase[e] == " "){
			hardRightGuessOne = hardRightGuessOne + 1
		}
  }

  gradeOnePhrases = [
  new Phrase("pencil", "An object", "Used for writing or drawing"),
  new Phrase("stove", "An object in the kitchen", "Used for cooking"),
	 new Phrase("crayon", "An object", "Used for drawing"),
    new Phrase("clock", "An electrical device", "Used for measuring time"),
  new Phrase("horse", "An animal", "Used for riding or racing"),
	 new Phrase("table", "A furniture", "With a flat top"),
    new Phrase("pear", "A fruit", "With green colour"),
  new Phrase("mango", "A fruit", "With yellow colour"),
	 new Phrase("rainbow", "A natural phenomena", "With seven colours"),
    new Phrase("uncle", "A name of relatives", "The brother of one's father"),
    new Phrase("apple", "A fruit", "With red or green colour"),
  new Phrase("notebook", "An object", "Used for writing notes"),
	 new Phrase("snail", "An animal", "With a shell"),
    new Phrase("goldfish", "A fish", "With orange colour"),
  new Phrase("goose", "A bird", "With a long neck"),
	 new Phrase("grass", "A plant", "Can see everywhere"),
    new Phrase("jellyfish", "An animal", "With a transparent body"),
  new Phrase("pancake", "A cake", "With thin and round"),
	 new Phrase("butter", "A dairy product", "With yellow colour"),
    new Phrase("ice cream", "A dairy product", "Usually eat in summer"),
];
  gradeOneIndex = Math.floor(random(0, gradeOnePhrases.length))
  gradeOneCurPhrase = gradeOnePhrases[gradeOneIndex]
  gradeOneGuess = []
  gradeOneWrongGuesses = []
  for (let e = 0; e < gradeOneCurPhrase.phrase.length; e++){
    gradeOneGuess.push(gradeOneCurPhrase.phrase[e] == " " ? " " : "_")
    if(gradeOneCurPhrase.phrase[e] == " "){
			gradeOneRightGuess = gradeOneRightGuess + 1
		}
  }

  //phrases for easy, normal, hard and grade 1 stages in 2 players
  easyPhrasesTwo = [
  new Phrase("tennis", "A sport", ""),
  new Phrase("prison", "A building", ""),
	 new Phrase("hamster", "A rodent", ""),
    new Phrase("cancer", "A disease", ""),
  new Phrase("doctor", "A job", ""),
	 new Phrase("germany", "A country", ""),
    new Phrase("clover", "A plant", ""),
  new Phrase("carbon", "A chemical element", ""),
	 new Phrase("violin", "A musical instrument", ""),
    new Phrase("monkey", "An animal", ""),
];
 easyIndexTwo = Math.floor(random(0, easyPhrasesTwo.length))
  easyCurPhraseTwo = easyPhrasesTwo[easyIndexTwo]
  easyGuessTwo = []
  easyWrongGuessesTwo = []
  for (let e = 0; e < easyCurPhraseTwo.phrase.length; e++){
    easyGuessTwo.push(easyCurPhraseTwo.phrase[e] == " " ? " " : "_")
    if(easyCurPhraseTwo.phrase[e] == " "){
			easyRightGuessTwo = easyRightGuessTwo + 1
    }
  }
  
  normalPhrasesTwo = [
  new Phrase("hummingbird", "A bird", ""),
  new Phrase("albatross", "A bird", ""),
	 new Phrase("pomegranate", "A fruit", ""),
    new Phrase("baryonyx", "A dinosaur", ""),
  new Phrase("hydroxide", "A polyatomic ion", ""),
	 new Phrase("go down in flames", "To fail spectacularly", ""),
    new Phrase("sit on the fence", "Avoid making a decision", ""),
  new Phrase("miss the boat", "Be too slow to take advantage of an opportunity", ""),
	 new Phrase("fair and square", "Honestly and straightforwardly", ""),
    new Phrase("cry wolf", "It contains an animal", ""),
];
  normalIndexTwo = Math.floor(random(0, normalPhrasesTwo.length))
  normalCurPhraseTwo = normalPhrasesTwo[normalIndexTwo]
  normalGuessTwo = []
  normalWrongGuessesTwo = []
  for (let e = 0; e < normalCurPhraseTwo.phrase.length; e++){
    normalGuessTwo.push(normalCurPhraseTwo.phrase[e] == " " ? " " : "_")
    if(normalCurPhraseTwo.phrase[e] == " "){
			normalRightGuessTwo = normalRightGuessTwo + 1
		}
  }
  
  hardPhrasesTwo = [
  new Phrase("be easier said than done", "", ""),
  new Phrase("kill two birds with one stone", "", ""),
	 new Phrase("cassowaries", "", ""),
    new Phrase("babingtonite", "", ""),
  new Phrase("kaleidoscope", "", ""),
	 new Phrase("omphalomancy", "", ""),
    new Phrase("abandonment", "", ""),
  new Phrase("wild goose chase", "", ""),
	 new Phrase("break the bank", "", ""),
    new Phrase("jump the gun", "", ""),
];
  hardIndexTwo = Math.floor(random(0, hardPhrasesTwo.length))
  hardCurPhraseTwo = hardPhrasesTwo[hardIndexTwo]
  hardGuessTwo = []
  hardWrongGuessesTwo = []
  for (let e = 0; e < hardCurPhraseTwo.phrase.length; e++){
    hardGuessTwo.push(hardCurPhraseTwo.phrase[e] == " " ? " " : "_")
    if(hardCurPhraseTwo.phrase[e] == " "){
			hardRightGuessTwo = hardRightGuessTwo + 1
		}
  }
  
  gradeOnePhrasesTwo = [
  new Phrase("rabbit", "An animal", "With two long ears"),
  new Phrase("zebra", "An animal", "With white and black stripes"),
	 new Phrase("grape", "A fruit", "With purple colour"),
    new Phrase("scarf", "A type of cloth", "Wear around the neck"),
  new Phrase("cherry", "A fruit", "With red colour"),
	 new Phrase("finger", "A part of the human body", "Connected to the hands"),
    new Phrase("pig", "An animal", "With pink colour"),
  new Phrase("jeans", "A cloth", "A type of pants"),
	 new Phrase("sweater", "A cloth", "Wear in winter"),
    new Phrase("ladybug", "An insect", "With red and black colour"),
    new Phrase("frog", "An animal", "An amphibian"),
  new Phrase("circle", "A shape", "With round"),
	 new Phrase("crown", "A kind of hat", "A king wears it"),
    new Phrase("calculator", "An electronic device", "Used for calculating"),
  new Phrase("fish", "An animal", "Live in the water"),
	 new Phrase("donkey", "An animal", "With four legs"),
    new Phrase("cheese", "A dairy food", "With yellow colour"),
  new Phrase("chair", "A furniture", "People can sit on"),
	 new Phrase("eggplant", "A vegetable", "With purple colour"),
    new Phrase("polar bear", "An animal", "Live in the Arctic"),
];
  gradeOneIndexTwo = Math.floor(random(0, gradeOnePhrasesTwo.length))
  gradeOneCurPhraseTwo = gradeOnePhrasesTwo[gradeOneIndexTwo]
  gradeOneGuessTwo = []
  gradeOneWrongGuessesTwo = []
  for (let e = 0; e < gradeOneCurPhraseTwo.phrase.length; e++){
gradeOneGuessTwo.push(gradeOneCurPhraseTwo.phrase[e] == " " ? " " : "_")
    if(gradeOneCurPhraseTwo.phrase[e] == " "){
			gradeOneRightGuessTwo = gradeOneRightGuessTwo + 1
		}
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

function gradeOneP(){
backDrop()
  //countdown timer for easy stage
	sc = second()
	imin = int(gradeOneRemainTime / 60)
	isec = gradeOneRemainTime % 60
	fill(0)
  stroke(0)
	textSize(35)
	textAlign(CENTER,CENTER)
	text(imin+':'+isec,width/2,height/8)
	if(sc!=sc_prev){
		sc_prev=sc
		gradeOneRemainTime = gradeOneRemainTime-1
	}
  //highscore
	textAlign(CENTER,CENTER)
	stroke(0)
	fill(0)
	textSize(25)
	text('High Score: '+gradeOneHighscore , width/3,height/12)  
}

function easyTwoPlayers(){
  backDrop()
  fill(0)
  //avatar on the left side
	circle(width/2.65, ELy, ELr)
arc(width/2.65,513,80,ELh,radians(180),radians(360))
  //avatar on the right side
  circle(width/1.6, ERy, ERr)
arc(width/1.6,513,80,ERh,radians(180),radians(360))
  //a line on the center
  rect(width/2, height/1.24, 1, height/3)

  if(easyLeftTurn == true){
    ELy = 513 - 130
    ELr = 50
    ELh = 220
    
		ERy = 513 - 70
		ERr = 40
		ERh = 100
	}else{
    ERy = 513 - 130
		ERr = 50
		ERh = 220

    ELy = 513 - 70
    ELr = 40
    ELh = 100
  }
}

function normalTwoPlayers(){
  backDrop()
  fill(0)
   //avatar on the left side
	circle(width/2.65, NLy, NLr)
arc(width/2.65,513,80,NLh,radians(180),radians(360))
  //avatar on the right side
 circle(width/1.6, NRy, NRr)
arc(width/1.6,513,80,NRh,radians(180),radians(360))
   //a line on the center
  rect(width/2, height/1.24, 1, height/3)

  if(normalLeftTurn == true){
    NLy = 513 - 130
    NLr = 50
    NLh = 220
    
		NRy = 513 - 70
		NRr = 40
		NRh = 100
	}else{
    NRy = 513 - 130
		NRr = 50
		NRh = 220

    NLy = 513 - 70
    NLr = 40
    NLh = 100
  }
}

function hardTwoPlayers(){
  backDrop()
  fill(0)
  //avatar on the left side
	circle(width/2.65, HLy, HLr)
arc(width/2.65,513,80,HLh,radians(180),radians(360))
  //avatar on the right side
  circle(width/1.6, HRy, HRr)
arc(width/1.6,513,80,HRh,radians(180),radians(360))
   //a line on the center
  rect(width/2, height/1.24, 1, height/3)

  if(hardLeftTurn == true){
    HLy = 513 - 130
    HLr = 50
    HLh = 220
    
		HRy = 513 - 70
		HRr = 40
		HRh = 100
	}else{
    HRy = 513 - 130
		HRr = 50
		HRh = 220

    HLy = 513 - 70
    HLr = 40
    HLh = 100
  }
}

function gradeOnePs(){
  backDrop()
  fill(0)
  //avatar on the left side
	circle(width/2 - 148, GLy, GLr)
arc(width/2 - 148,513,80,GLh,radians(180),radians(360))
  //avatar on the right side
  circle(width/2 + 148, GRy, GRr)
arc(width/2 + 148,513,80,GRh,radians(180),radians(360))
  //a line on the center
  rect(width/2, height/1.24, 1, height/3)

  if(gradeOneLeftTurn == true){
    GLy = 513 - 130
    GLr = 50
    GLh = 220
    
		GRy = 513 - 70
		GRr = 40
		GRh = 100
	}else{
    GRy = 513 - 130
		GRr = 50
		GRh = 220

    GLy = 513 - 70
    GLr = 40
    GLh = 100
  }
  leftDoodle()
  rightDoodle()
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

function leftDoodle(){
switch(Ld){
  case 0:
 
    break
  case 1:
  leftPig.update()
    
    if(gradeOneLeftTurn == true){
  leftPig = new pigNose(width/2 - 148, height/2 + 120, 3, 15, 10, 255,255,255,0)
    }else{
       leftPig = new pigNose(width/2 - 148, height/2 + 185, 3, 15, 10, 255,255,255,0)
    }
   break
  case 2:
leftPig.update()
    leftM.update()
    
    if(gradeOneLeftTurn == true){
  leftPig = new pigNose(width/2 - 148, height/2 + 120, 3, 15, 10, 255,255,255,0)
      leftM = new mustache(width/2 - 148, height/2 + 120, width/2 - 148, height/2 + 120, width/2 - 148, height/2 + 120, width/2 - 148, height/2 + 120, 255,255,255,255)
    }else{
       leftPig = new pigNose(width/2 - 148, height/2 + 185, 3, 15, 10, 255,255,255,0)
       leftM = new mustache(width/2 - 148, height/2 + 185, width/2 - 148, height/2 + 185, width/2 - 148, height/2 + 185, width/2 - 148, height/2 + 185, 255,255,255,255)
    }
   break
  case 3:
leftPig.update()
     leftM.update()
    leftSnot.update()
    
    if(gradeOneLeftTurn == true){
  leftPig = new pigNose(width/2 - 148, height/2 + 120, 3, 15, 10, 255,255,255,0)
      leftM = new mustache(width/2 - 148, height/2 + 120, width/2 - 148, height/2 + 120, width/2 - 148, height/2 + 120, width/2 - 148, height/2 + 120, 255,255,255,255)
      leftSnot = new snot(width/2 - 144, height/2 + 145, 5, 25, 255,255,255,255)
    }else{
      leftPig = new pigNose(width/2 - 148, height/2 + 185, 3, 15, 10, 255,255,255,0)
       leftM = new mustache(width/2 - 148, height/2 + 185, width/2 - 148, height/2 + 185, width/2 - 148, height/2 + 185, width/2 - 148, height/2 + 185, 255,255,255,255)
       leftSnot = new snot(width/2 - 144, height/2 + 210, 5, 25, 255,255,255,255)
    }
    break
  case 4:
leftPig.update()
     leftM.update()
    leftSnot.update()
    leftI.update()
    
    if(gradeOneLeftTurn == true){
  leftPig = new pigNose(width/2 - 148, height/2 + 120, 3, 15, 10, 255,255,255,0)
      leftM = new mustache(width/2 - 148, height/2 + 120, width/2 - 148, height/2 + 120, width/2 - 148, height/2 + 120, width/2 - 148, height/2 + 120, 255,255,255,255)
      leftSnot = new snot(width/2 - 144, height/2 + 145, 5, 25, 255,255,255,255)
      leftI = new iceCream(width/2 - 195, height/2 + 50, 25, 208, 139, 0, 254, 252, 207)
    }else{
      leftPig = new pigNose(width/2 - 148, height/2 + 185, 3, 15, 10, 255,255,255,0)
       leftM = new mustache(width/2 - 148, height/2 + 185, width/2 - 148, height/2 + 185, width/2 - 148, height/2 + 185, width/2 - 148, height/2 + 185, 255,255,255,255)
      leftSnot = new snot(width/2 - 144, height/2 + 210, 5, 25, 255,255,255,255)
       leftI = new iceCream(width/2 - 195, height/2 + 110, 25, 208, 139, 0, 254, 252, 207)
    }
    break
}
}

function rightDoodle(){
switch(Rd){
  case 0:

    break
  case 1:
   rightPig.update()
    
    if(gradeOneLeftTurn == false){
       rightPig = new pigNose(width/2 + 148, height/2 + 120, 3, 15, 10, 255,255,255,0)
    }else{
      rightPig = new pigNose(width/2 + 148, height/2 + 185, 3, 15, 10, 255,255,255,0)
    }
   break
  case 2:
    rightPig.update()
    rightM.update()
    
    if(gradeOneLeftTurn == false){
       rightPig = new pigNose(width/2 + 148, height/2 + 120, 3, 15, 10, 255,255,255,0)
      rightM = new mustache(width/2 + 148, height/2 + 120, width/2 + 148, height/2 + 120, width/2 + 148, height/2 + 120, width/2 + 148, height/2 + 120, 255,255,255,255)
    }else{
      rightPig = new pigNose(width/2 + 148, height/2 + 185, 3, 15, 10, 255,255,255,0)
      rightM = new mustache(width/2 + 148, height/2 + 185, width/2 + 148, height/2 + 185, width/2 + 148, height/2 + 185, width/2 + 148, height/2 + 185, 255,255,255,255)
    }
   break
  case 3:
    rightPig.update()
    rightM.update()
    rightSnot.update()
    
    if(gradeOneLeftTurn == false){
       rightPig = new pigNose(width/2 + 148, height/2 + 120, 3, 15, 10, 255,255,255,0)
      rightM = new mustache(width/2 + 148, height/2 + 120, width/2 + 148, height/2 + 120, width/2 + 148, height/2 + 120, width/2 + 148, height/2 + 120, 255,255,255,255)
      rightSnot = new snot(width/2 + 152, height/2 + 145, 5, 25, 255,255,255,255)
    }else{
       rightPig = new pigNose(width/2 + 148, height/2 + 185, 3, 15, 10, 255,255,255,0)
      rightM = new mustache(width/2 + 148, height/2 + 185, width/2 + 148, height/2 + 185, width/2 + 148, height/2 + 185, width/2 + 148, height/2 + 185, 255,255,255,255)
       rightSnot = new snot(width/2 + 152, height/2 + 210, 5, 25, 255,255,255,255)
    }
    break
  case 4:
  rightPig.update()
    rightM.update()
    rightSnot.update()
    rightI.update()
    
    if(gradeOneLeftTurn == false){
       rightPig = new pigNose(width/2 + 148, height/2 + 120, 3, 15, 10, 255,255,255,0)
      rightM = new mustache(width/2 + 148, height/2 + 120, width/2 + 148, height/2 + 120, width/2 + 148, height/2 + 120, width/2 + 148, height/2 + 120, 255,255,255,255)
      rightSnot = new snot(width/2 + 152, height/2 + 145, 5, 25, 255,255,255,255)
      rightI = new iceCream(width/2 + 98, height/2 + 50, 25, 208, 139, 0, 254, 252, 207)
    }else{
      rightPig = new pigNose(width/2 + 148, height/2 + 185, 3, 15, 10, 255,255,255,0)
      rightM = new mustache(width/2 + 148, height/2 + 185, width/2 + 148, height/2 + 185, width/2 + 148, height/2 + 185, width/2 + 148, height/2 + 185, 255,255,255,255)
       rightSnot = new snot(width/2 + 152, height/2 + 210, 5, 25, 255,255,255,255)
      rightI = new iceCream(width/2 + 98, height/2 + 110, 25, 208, 139, 0, 254, 252, 207)
    }
    break
}
}

function keyPressed(){
  //if spacebar is pressed, pause and restart
	if(menu == 4 || menu == 5 || menu == 6 || menu == 7 || menu == 8 || menu == 9 || menu == 16 || menu == 17){
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
    if(menu == 4){ //1 player's easy stage
    
    let easyResultOne = []
    let easyPhraseOne = easyCurPhraseOne.phrase
    for(let e = 0; e < easyPhraseOne.length; e++){
      if(easyPhraseOne[e] === key && easyGuessOne[e] === "_"){
        easyResultOne.push(e)
        easyGuessOne[e] = key
				easyRightGuessOne = easyRightGuessOne + 1
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
  if(menu == 5){ //1 player's normal stage
    let normalResultOne = []
    let normalPhraseOne = normalCurPhraseOne.phrase
    for(let e = 0; e < normalPhraseOne.length; e++){
      if(normalPhraseOne[e] === key && normalGuessOne[e] === "_"){
        normalResultOne.push(e)
        normalGuessOne[e] = key
				normalRightGuessOne = normalRightGuessOne + 1
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
    if(menu == 6){ //1 player's hard stage
     let hardResultOne = []
    let hardPhraseOne = hardCurPhraseOne.phrase
    for(let e = 0; e < hardPhraseOne.length; e++){
      if(hardPhraseOne[e] === key && hardGuessOne[e] === "_"){
        hardResultOne.push(e)
        hardGuessOne[e] = key
				hardRightGuessOne = hardRightGuessOne + 1
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
    
    if(menu == 7){ //2 players' easy stage
    let easyResultTwo = []
    let easyPhraseTwo = easyCurPhraseTwo.phrase
    for(let e = 0; e < easyPhraseTwo.length; e++){
      if(easyPhraseTwo[e] === key && easyGuessTwo[e] === "_"){
        easyResultTwo.push(e)
        easyGuessTwo[e] = key
				easyRightGuessTwo = easyRightGuessTwo + 1
      }
    }
  if (easyResultTwo.length > 0) {
    if(easyLeftTurn == true){
					ELscore = ELscore + 1
      }else{
				ERscore = ERscore + 1
			}
		}
		else if(easyWrongGuessesTwo.includes(key)){
      if(easyLeftTurn == true){
				easyLeftTurn = false
			}else{
				easyLeftTurn = true
			}
			textSize(25)
			text("You already guessed that.", width/2, height/4 + 150);
		}
		else if(easyWrongGuessesTwo.push(key)){
      if(easyLeftTurn == true){
			easyLeftTurn = false
			}else{
				easyLeftTurn = true
			}
			textSize(25)
			text("NO MATCH!", width/2, height/4 + 150)
		}
      }
      
      if(menu == 8){ //2 players' normal stage
    let normalResultTwo = []
    let normalPhraseTwo = normalCurPhraseTwo.phrase
    for(let e = 0; e < normalPhraseTwo.length; e++){
      if(normalPhraseTwo[e] === key && normalGuessTwo[e] === "_"){
        normalResultTwo.push(e)
        normalGuessTwo[e] = key
				normalRightGuessTwo = normalRightGuessTwo + 1
      }
    }
  if (normalResultTwo.length > 0) {
    if(normalLeftTurn == true){
					NLscore = NLscore + 1
      }else{
				NRscore = NRscore + 1
			}
		}
		else if(normalWrongGuessesTwo.includes(key)){
      if(normalLeftTurn == true){
				normalLeftTurn = false
			}else{
				normalLeftTurn = true
			}
			textSize(25)
			text("You already guessed that.", width/2, height/4 + 150);
		}
		else if(normalWrongGuessesTwo.push(key)){
      if(normalLeftTurn == true){
			normalLeftTurn = false
			}else{
				normalLeftTurn = true
			}
			textSize(25)
			text("NO MATCH!", width/2, height/4 + 150)
		}
      }

        if(menu == 9){ //2 players' hard stage
    let hardResultTwo = []
    let hardPhraseTwo = hardCurPhraseTwo.phrase
    for(let e = 0; e < hardPhraseTwo.length; e++){
      if(hardPhraseTwo[e] === key && hardGuessTwo[e] === "_"){
        hardResultTwo.push(e)
        hardGuessTwo[e] = key
				hardRightGuessTwo = hardRightGuessTwo + 1
      }
    }
  if (hardResultTwo.length > 0) {
    if(hardLeftTurn == true){
					HLscore = HLscore + 1
      }else{
				HRscore = HRscore + 1
			}
		}
		else if(hardWrongGuessesTwo.includes(key)){
      if(hardLeftTurn == true){
				hardLeftTurn = false
			}else{
				hardLeftTurn = true
			}
			textSize(25)
			text("You already guessed that.", width/2, height/4 + 120);
		}
		else if(hardWrongGuessesTwo.push(key)){
      if(hardLeftTurn == true){
			hardLeftTurn = false
			}else{
				hardLeftTurn = true
			}
			textSize(25)
			text("NO MATCH!", width/2, height/4 + 120)
		}
  }

    if(menu == 16){ //1 player's grade 1 stage
    
    let gradeOneResult = []
    let gradeOnePhrase = gradeOneCurPhrase.phrase
    for(let e = 0; e < gradeOnePhrase.length; e++){
      if(gradeOnePhrase[e] === key && gradeOneGuess[e] === "_"){
        gradeOneResult.push(e)
        gradeOneGuess[e] = key
				gradeOneRightGuess = gradeOneRightGuess + 1
      }
    }
  if (gradeOneResult.length > 0) {
    
		}
		else if(gradeOneWrongGuesses.includes(key)){
			textSize(25)
			text("You already guessed that.", width/2, height/1.5);
       gradeOneRemainTime = gradeOneRemainTime - 40
		}
		else{
		 gradeOneWrongGuesses.push(key)
			textSize(25)
			text("NO MATCH!", width/2, height/1.5)
       gradeOneRemainTime = gradeOneRemainTime - 30
		}
}

    if(menu == 17){ //2 players' grade 1 stage
    
    let gradeOneResultTwo = []
    let gradeOnePhraseTwo = gradeOneCurPhraseTwo.phrase
    for(let e = 0; e < gradeOnePhraseTwo.length; e++){
      if(gradeOnePhraseTwo[e] === key && gradeOneGuessTwo[e] === "_"){
        gradeOneResultTwo.push(e)
        gradeOneGuessTwo[e] = key
				gradeOneRightGuessTwo = gradeOneRightGuessTwo + 1
      }
    }
  if (gradeOneResultTwo.length > 0) {
    if(gradeOneLeftTurn == true){
					GLscore = GLscore + 1
         Rd = Rd + 1
        Ld = Ld - 1
      if(Ld < 1){
        Ld = 0
      }
      if(Rd > 4){
        Rd = 4
      }
      }else{
				GRscore = GRscore + 1
      Rd = Rd - 1
      Ld = Ld + 1
      if(Rd < 0){
        Rd = 0
      }
      if(Ld > 4){
        Ld = 4
      }
			}
		}
		else if(gradeOneWrongGuessesTwo.includes(key)){
      if(gradeOneLeftTurn == true){
				gradeOneLeftTurn = false
			}else{
				gradeOneLeftTurn = true
			}
			textSize(25)
			text("You already guessed that.", width/2, height/4 + 150);
    
		}else if(gradeOneWrongGuessesTwo.push(key)){
      if(gradeOneLeftTurn == true){
			gradeOneLeftTurn = false
			}else{
				gradeOneLeftTurn = true
			}
			textSize(25)
			text("NO MATCH!", width/2, height/4 + 150)
		}
}
  }
}

function draw() {
  clear()
  if(menu == 4 || menu == 5 || menu == 6 || menu == 7 || menu == 8 || menu == 9 || menu == 16 || menu == 17){
	frameRate(2)
	}
  if(menu == 10 || menu == 11 || menu == 12 || menu == 13 || menu == 14 || menu == 15 || menu == 18 || menu == 19){
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
      gradeOnePlayer.update()
      gradeOnePlayer.render()
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
      if(gradeOnePlayer.pressed === true){
        resetVariables()
        menu = 16
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
      gradeOnePlayers.update()
      gradeOnePlayers.render()
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
      if(gradeOnePlayers.pressed === true){
        resetVariables()
        menu = 17
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

      textSize(20)
      text("1 Player Mode", width/2, height/2.5)
      text("2 Players Mode", width/2,height/1.55)
      
      textSize(14)
      text("Guess the phrase or word by pressing any letter key within the time limit.",width/2, height/2.1)
      text("Whenever a player guesses wrong letter,", width/2.1, height/2.1 + 25)
      text("the time limit will be decreased by 30 seconds.", width/2.1 + 80, height/2.1 + 40)

       text("Guess the phrase or word by pressing any letter key.",width/2, height/1.55 + 30)
      text("If a player guesses correct letter,",width/2.1, height/1.55 + 55)
      text("then the player continues guessing",width/2.1 + 60,height/1.55 + 70)
      text("Otherwise, the turn move on to another player.",width/2,height/1.55 + 95)
      text("The player who guesses more letters wins.", width/2, height/1.55 + 120)

      textAlign(LEFT)
      textSize(15)
      text("[Spacebar] pause",width/1.56, height/14)
      text("[Backspace] quit", width/1.56, height/14 + 20)
      
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
      if(easyRightGuessOne == easyCurPhraseOne.phrase.length){
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
      if(normalRightGuessOne == normalCurPhraseOne.phrase.length){
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
	textSize(25);
	text(hardGuessOne.join(" "), width/2, height/3);
	textSize(20)
	fill(255,0,0)
	text(hardWrongGuessesOne.join(" "), width/2, height/2 + 20)
      if(hardRightGuessOne == hardCurPhraseOne.phrase.length){
				menu = 12
			}
      if(hardRemainTime < 1){
        menu = 12
      }
      break
    case 7: //easy mode for 2 players
      clear()
      easyTwoPlayers()
      fill(0,0,0)
	textSize(50);
	text(easyGuessTwo.join(" "), width/2, height/4);
	textSize(20)
      text(`Hint: ${easyCurPhraseTwo.hint}`, width/2, height/4 + 60)
	fill(255,0,0)
	text(easyWrongGuessesTwo.join(" "), width/2, height/4 + 90)
      if(easyRightGuessTwo == easyCurPhraseTwo.phrase.length){
        ELscore *= 10
				ERscore *= 10
				menu = 13
			}
      break
    case 8: //normal mode for 2 players
      clear()
      normalTwoPlayers()
      fill(0,0,0)
	textSize(40);
	text(normalGuessTwo.join(" "), width/2, height/4);
      if(normalWrongGuessesTwo.length > 1){
        fill(0)
        textSize(20)
        text(`Hint: ${normalCurPhraseTwo.hint}`, width/2, height/4 + 60)
      }
  textSize(20)
	fill(255,0,0)
	text(normalWrongGuessesTwo.join(" "), width/2, height/4 + 90)
      if(normalRightGuessTwo == normalCurPhraseTwo.phrase.length){
        NLscore *= 10
				NRscore *= 10
				menu = 14
			}
      break
    case 9: //hard mode for 2 playres
     clear()
      hardTwoPlayers()
      fill(0,0,0)
	textSize(25);
	text(hardGuessTwo.join(" "), width/2, height/4);
	textSize(20)
	fill(255,0,0)
	text(hardWrongGuessesTwo.join(" "), width/2, height/4 + 60)
      if(hardRightGuessTwo == hardCurPhraseTwo.phrase.length){
        HLscore *= 10
				HRscore *= 10
				menu = 15
			}
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
    case 11: //result of 1 player's normal stage
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
    case 12: //result of 1 player's hard stage
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
    case 13: //result of 2 players' easy stage
      clear()
      backDrop()

      if(ELscore>ERscore){
				easyLeftResult="WIN"
				easyRightResult="LOSE"
			}else if(ELscore<ERscore){
				easyLeftResult="LOSE"
				easyRightResult="WIN"
			}else if(ELscore==ERscore){
				easyLeftResult="TIE"
				easyRightResult="TIE"
			}else{
				easyLeftResult="DRAW"
				easyRightResult="DRAW"
			}
      fill(0)
      textSize(50)
			text(easyRightResult, width/2 + 150,height/2.7)
			text(easyLeftResult, width/2 - 150,height/2.7)
			textSize(30)
	text('Score: '+ERscore,width/2 + 150,height/2)
	text('Score: '+ELscore,width/2 - 150,height/2)
      rect(width/2, height/2.5, 3, height/2.5)
      home.update()
        home.render()
       restartEasyForTwo.update()
       restartEasyForTwo.render()
         if(home.pressed === true){
         menu = 0
       }
       if(restartEasyForTwo.pressed === true){
         resetVariables()
         menu = 7
       }
      break
    case 14: //result of 2 players' normal stage
      clear()
      backDrop()

      if(NLscore > NRscore){
				normalLeftResult = "WIN"
				normalRightResult = "LOSE"
			}else if(NLscore < NRscore){
				normalLeftResult = "LOSE"
				normalRightResult = "WIN"
			}else if(NLscore == NRscore){
				normalLeftResult = "TIE"
				normalRightResult = "TIE"
			}else{
				normalLeftResult = "DRAW"
				normalRightResult = "DRAW"
			}
      fill(0)
      textSize(50)
			text(normalRightResult, width/2 + 150,height/2.7)
			text(normalLeftResult, width/2 - 150,height/2.7)
			textSize(30)
	text('Score: '+NRscore,width/2 + 150,height/2)
	text('Score: '+NLscore,width/2 - 150,height/2) 
      rect(width/2, height/2.5, 3, height/2.5)
      home.update()
        home.render()
       restartNormalForTwo.update()
       restartNormalForTwo.render()
         if(home.pressed === true){
         menu = 0
       }
       if(restartNormalForTwo.pressed === true){
         resetVariables()
         menu = 8
       }
      break
    case 15: //result of 2 players' hard stage
      clear()
      backDrop()

      if(HLscore > HRscore){
				hardLeftResult = "WIN"
				hardRightResult = "LOSE"
			}else if(HLscore < HRscore){
				hardLeftResult = "LOSE"
				hardRightResult = "WIN"
			}else if(HLscore == HRscore){
				hardLeftResult = "TIE"
				hardRightResult = "TIE"
			}else{
				hardLeftResult = "DRAW"
				hardRightResult = "DRAW"
			}
      fill(0)
      textSize(50)
			text(hardRightResult, width/2 + 150,height/2.7)
			text(hardLeftResult, width/2 - 150,height/2.7)
			textSize(30)
	text('Score: '+HRscore,width/2 + 150,height/2)
	text('Score: '+HLscore,width/2 - 150,height/2) 
      rect(width/2, height/2.5, 3, height/2.5)
      home.update()
        home.render()
       restartHardForTwo.update()
       restartHardForTwo.render()
         if(home.pressed === true){
         menu = 0
       }
       if(restartHardForTwo.pressed === true){
         resetVariables()
         menu = 9
       }
      break
  case 16: //Grade 1 stage for 1 player
  clear()
gradeOneP()
  fill(0,0,0)
	textSize(40);
  text(gradeOneGuess.join(" "), width/2, height/3);
  textSize(20)
        text(`Hint: ${gradeOneCurPhrase.hint}`, width/2, height/2 - 20)
      if(gradeOneWrongGuesses.length > 2){
        fill(0)
        textSize(18)
        text(`Hint: ${gradeOneCurPhrase.secHint}`, width/2, height/2 + 10)
      }
  textSize(20)
	fill(255,0,0)
	text(gradeOneWrongGuesses.join(" "), width/2, height/2 + 40)
      if(gradeOneRightGuess == gradeOneCurPhrase.phrase.length){
				menu = 18
			}
      if(gradeOneRemainTime < 1){
        menu = 18
      }
  break
  case 17: //Grade 1 stage for 2 players
clear()
gradeOnePs()
  stroke(0)
  fill(0,0,0)
	textSize(50);
	text(gradeOneGuessTwo.join(" "), width/2, height/4);
	textSize(20)
      text(`Hint: ${gradeOneCurPhraseTwo.hint}`, width/2, height/4 + 60)
  if(gradeOneWrongGuessesTwo.length > 2){
        fill(0)
        textSize(18)
        text(`Hint: ${gradeOneCurPhraseTwo.secHint}`, width/2, height/4 + 90)
      }
	fill(255,0,0)
	text(gradeOneWrongGuessesTwo.join(" "), width/2, height/4 + 120)
      if(gradeOneRightGuessTwo == gradeOneCurPhraseTwo.phrase.length){
        GLscore *= 10
				GRscore *= 10
				menu = 19
			}
  break
  case 18: //Result of 1 player's grade 1 stage
clear()
backDrop()
      s.fall()
	s1.fall()
	s2.fall()
	s3.fall()
	s4.fall()
	s5.fall()
	s6.fall()
	s7.fall()
	s8.fall()
   gradeOneScore = gradeOneRemainTime * 100 / topScore_time
      
     if(gradeOneScore < 1) {
       textAlign(CENTER)
      textSize(50)
       stroke(0)
      fill(0)
      text("Game Over", width/2, height/4)
       textSize(40)
       text('Score: '+gradeOneScore, width/2, height/2)
       home.update()
        home.render()
       restartGradeOneP.update()
       restartGradeOneP.render()
       if(home.pressed === true){
         menu = 0
       }
       if(restartGradeOneP.pressed === true){
         resetVariables()
         menu = 16
       }
     }
      if(gradeOneScore > 1) {
       textAlign(CENTER)
      textSize(50)
        stroke(0)
      fill(0)
      text("Clear", width/2, height/4)
        textSize(40)
       text('Score: '+gradeOneScore, width/2, height/2)
        home.update()
        home.render()
        restartGradeOneP.update()
       restartGradeOneP.render()
        if(gradeOneHighscore < gradeOneScore){
          gradeOneHighscore = gradeOneScore
        }
         if(home.pressed === true){
         menu = 0
       }
        if(restartGradeOneP.pressed === true){
         resetVariables()
         menu = 16
       }
     }
  break
  case 19: //Result of 2 players' grade 1 stage
clear()
backDrop()
      
  if(GLscore>GRscore){
				gradeOneLeftResult="WIN"
				gradeOneRightResult="LOSE"

leftB1.up()
     leftB2.up()
     leftB3.up()
    leftB4.up()
    
    fill(0)
    //left avatar
    circle(width/2 - 150, height/2 - 30, 60)
arc(width/2 - 150,height/2 + 105,90,230,radians(180),radians(360))

    //right avatar
    circle(width/2 + 150, height/2 + 38, 40)
arc(width/2 + 150,height/2 + 105,75,100,radians(180),radians(360))

    //line on the center
     rectMode(CORNER)
      rect(width/2, height/2 - 160, 3, height/2)

    //sunglasses and mouth
    fill(52,168,235)
	rectMode(CENTER)
	rect(width/2 - 165, height/2 - 40, 30, 1)
	arc(width/2 - 165, height/2 - 40, 25, 20, radians(360), radians(180))
	rect(width/2 - 135, height/2 - 40, 30, 1)
	arc(width/2 - 135, height/2 - 40, 25, 20, radians(360), radians(180))
	noFill()
	stroke(255)
	bezier(width/2 - 167.5, height/2 - 20, width/2 - 157.5, height/2 - 10, width/2 - 143.5, height/2 - 10, width/2 - 133.5, height/2 - 20)

    //dark cloud
    fill(150)
	noStroke()
	ellipse(width/2 + 150, height/2 - 25, 80, 70)
	circle(width/2 + 115, height/2 - 20,50)
	circle(width/2 + 185, height/2 - 20,50)
    
    rightR1.fall()
     rightR2.fall()
     rightR3.fall()
     rightR4.fall()
     rightR5.fall()
     rightR6.fall()
     rightR7.fall()
    
			}else if(GLscore<GRscore){
				gradeOneLeftResult="LOSE"
				gradeOneRightResult="WIN"

     rightB1.up()
    rightB2.up()
    rightB3.up()
    rightB4.up()
    
    fill(0)
    //left avatar
     circle(width/2 - 150, height/2 + 38, 40)
arc(width/2 - 150,height/2 + 105,75,100,radians(180),radians(360))
    //right avatar
   circle(width/2 + 150, height/2 - 30, 60)
arc(width/2 + 150,height/2 + 105,90,230,radians(180),radians(360))

    //line on the center
     rectMode(CORNER)
      rect(width/2, height/2 - 160, 3, height/2)

    //sunglasses and mouth
    fill(52,168,235)
	rectMode(CENTER)
	rect(width/2 + 135, height/2 - 40, 30, 1)
	arc(width/2 + 135, height/2 - 40, 25, 20, radians(360), radians(180))
	rect(width/2 + 165, height/2 - 40, 30, 1)
	arc(width/2 + 165, height/2 - 40, 25, 20, radians(360), radians(180))
	noFill()
	stroke(255)
	bezier(width/2 + 133.5, height/2 - 20, width/2 + 143.5, height/2 - 10, width/2 + 157.5, height/2 - 10, width/2 + 167.5, height/2 - 20)

    //dark cloud
    fill(150)
	noStroke()
	ellipse(width/2 - 150, height/2 - 25, 80, 70)
	circle(width/2 - 185, height/2 - 20,50)
	circle(width/2 - 115, height/2 - 20,50)
  
    leftR1.fall()
     leftR2.fall()
     leftR3.fall()
     leftR4.fall()
    leftR5.fall()
    leftR6.fall()
    leftR7.fall()
    
			}else if(GLscore==GRscore){
				gradeOneLeftResult="TIE"
				gradeOneRightResult="TIE"
    fill(0)
    //left
    circle(width/2 - 35, height/2 - 15, 50)
arc(width/2 - 35,height/2 + 105,80,200,radians(180),radians(360))
    //right
     circle(width/2 + 35, height/2 - 15, 50)
arc(width/2 + 35,height/2 + 105,80,200,radians(180),radians(360))
    
			}else{
				gradeOneLeftResult="DRAW"
				gradeOneRightResult="DRAW"
			}
      fill(0)
      stroke(0)
      textSize(50)
			text(gradeOneRightResult, width/2 + 150,height/2 - 170)
			text(gradeOneLeftResult, width/2 - 150,height/2 - 170)
			textSize(30)
	text('Score: '+GRscore,width/2 + 150,height/2 - 120)
	text('Score: '+GLscore,width/2 - 150,height/2 - 120)
      home.update()
        home.render()
       restartGradeOnePs.update()
       restartGradeOnePs.render()
         if(home.pressed === true){
         menu = 0
       }
       if(restartGradeOnePs.pressed === true){
         resetVariables()
         menu = 17
       }
  break
  }
}
