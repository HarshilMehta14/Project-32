/*The game's name is See Up
The game's motto is that the person is walking using arrow keys.
He needs to be safe from the different things falling from the top.
He will have 5 levels to clear.
I hope you enjoy the game 🙂🙂*/

//Name Spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//Variables for Acid rain, human, background image and walking animation
var gameState = 1;
var human;
var level1, level2, level3, level4, level5;
var walking;
var acid = [];

//Loading the animation for person walking
function preload(){
  walking = loadAnimation("images/Walking_Frame/walking_1.png",
  "images/Walking_Frame/walking_2.png",
  "images/Walking_Frame/walking_3.png",
  "images/Walking_Frame/walking_4.png",
  "images/Walking_Frame/walking_5.png",
  "images/Walking_Frame/walking_6.png",
  "images/Walking_Frame/walking_7.png",
  "images/Walking_Frame/walking_8.png");

  level1 = loadImage("images/level1.png");

}

function setup() {
  createCanvas(1360,650);
  

}

function draw() {
  background(level1);

  drawSprites();
}