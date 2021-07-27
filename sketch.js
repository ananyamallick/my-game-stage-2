var gamestate =1;
var dp , dp1;
var q1,q2,q3,q4,q5,q6,q7,q8,q9,q10;
var a1,a2,a3,a4,a5,a6,a7,a8,a9,a10;
var code , secur , systm ;
var ans1 , ans2 , ans3 , ans4 , ans5 , ans6 , ans7 , ans8 , ans9 , ans10;
var thank;
var con;
var sec , sec1 , sec2 , sec3 , sec4 , sec5 , sec6 , sec7 , sec8 , sec9 , sec10;

function preload(){
  dp = loadImage("dp.jpeg");
  dp1 = loadImage("dp1.jpeg");
  q1 = loadImage("q1.jpeg");
  a1 = loadImage("a1.jpeg");
  q2 = loadImage("q2.jpeg");
  a2 = loadImage("a2.jpeg");
  q3 = loadImage("q3.jpeg");
  a3 = loadImage("a3.jpeg");
  q4 = loadImage("q4.jpeg");
  a4 = loadImage("a4.jpeg");
  q5 = loadImage("q5.jpeg");
  a5 = loadImage("a5.jpeg");
  ans1 = loadSound("ans1.mp4");
  ans2 = loadSound("ans2.mp4");
  ans3 = loadSound("ans3.mp4");
  thank = loadImage("thank.jpeg");
}

function setup() {
  createCanvas(1050,625);
  sec = new Security();
  sec1 = new Sec2();
  sec2 = new Sec3();
  sec3 = new Sec4();
  sec4 = new Sec5();
  systm = new System();
  con = new Cont();
}

function draw() {
  background(dp);  
  if(keyDown("space"))//To start the game
  {    gamestate = 2;  }
  if(gamestate === 2)
  {    background(dp1);  }
  if(keyDown("Right_Arrow"))//To start the round
  {    gamestate = 3;  }
  if(gamestate === 3)//first question
  {  background(q1);
     sec.display ();  }

  if(gamestate === 4)//answer no. 1
  {    background(a1);
       ans1.play();
       con.display();
  }
  if(gamestate === 5)//second question
  {    background(q2);
       sec1.display();
       ans1.stop();
  }
  if(gamestate === 6)//answer no. 2
  {    background(a2);
       ans2.play();
       con.display();
  }
  if(gamestate === 7)//third question
  {    background(q3);
       sec2.display();
       ans2.stop();
  }
  if(gamestate === 8)//answer no. 3
  {    background(a3);
       ans3.play();
       con.display();
  }
  if(gamestate === 9)//fourth question
  {    background(q4);
       sec3.display();
       ans3.stop();
  }
  if(gamestate === 10)//answer no. 4
  {    background(a4);
       //ans2.play();
       con.display();
  }
  if(gamestate === 11)//fifth question
  {    background(q5);
       sec4.display();
       //ans2.stop();
  }
  if(gamestate === 12)//answer no. 5
  {    background(a5);
      //ans3.play();
      con.display();
  }
  if(gamestate === 13)
  {    background(thank);
       //ans3.stop();
  }
  drawSprites();
}