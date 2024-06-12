// INSTRUCTIONS //

// Press and hold the black lines in the middle of the colours to move them. Release to have them bounce back into place.

// Wall Drawing #853 (1998)


// A wall bordered and divided vertically into two parts by a flat black band. Left part: a square is divided vertically by a curvy line. Left: glossy red; right: glossy green; Right part: a square is divided horizontally by a curvy line. Top: glossy blue; bottom: glossy orange.

// I've always thought of curvy lines as moving lines in my mind, so instead of making curvy lines, I decided to make a moving line that is user interactive.



let baseLength = 10
let left = 250
let right = 495
let maxHeight = 480
let minHeight = 10
let over = false
let follow = false
let weight = 1
let spring = 0.1
let friction = 0.75
let restPosition = 250
let position = restPosition
let velocity = 0
let acceleration = 0
let force = 0

//

let baseHeight = 10
let bottom = 5
let Top = 495
let maxLength = 240
let minLength = 5
let over2 = false
let follow2 = false
let weight2 = 1
let spring2 = 0.1
let friction2 = 0.75
let restPosition2 = 125
let position2 = restPosition2
let velocity2 = 0
let acceleration2 = 0
let force2 = 0

function setup(){
  createCanvas(500, 500)
  rectMode(CORNERS)
}



//Right Side



function draw(){
  background(0)
  updateHeight()
  drawSpring()
  updateHeight2()
  drawSpring2()
}
function drawSpring(){
  fill(0,0,255)
  quad(250,5,495,5,495,495,250,495)
  fill(255,170,0)
  quad(left, position, right, position, 495,495,250,495)
  if(over || follow){
    fill(255)
  } else {
    fill(0)
  }
  stroke(0)
  strokeWeight(5)
  rect(left, position, right, position + baseLength)
}
function updateHeight(){
  if(!follow){
    force = -spring * (position - restPosition)
    acceleration = force / weight
    velocity = friction * (velocity + acceleration)
    position = position + velocity
  }
  if(mouseX > left && mouseX < right && mouseY > position && mouseY < position + baseLength){
    over = true
  } else {
    over = false
  }
  if(follow){
    position = mouseY 
    position = constrain(position, minHeight, maxHeight)
  }
}



// Left Side



function drawSpring2(){
  fill(0,255,0)
  quad(5,5,250,5,250,495,5,495)
  fill(255,0,0)
  quad(5,5,position2,bottom,position2,Top,5,495)
  if(over2 || follow2){
    fill(255)
  } else {
    fill(0)
  }
  stroke(0)
  strokeWeight(5)
  rect(position2, bottom, position2 + baseHeight, Top)
}
function updateHeight2(){
  if(!follow2){
    force2 = -spring2 * (position2 - restPosition2)
    acceleration2 = force2 / weight2
    velocity2 = friction2 * (velocity2 + acceleration2)
    position2 = position2 + velocity2
  }
  if(mouseY > bottom && mouseY < Top && mouseX > position2 && mouseX < position2 + baseHeight){
    over2 = true
  } else {
    over2 = false
  }
  if(follow2){
    position2 = mouseX
    position2 = constrain(position2, minLength, maxLength)
  }
}
function mousePressed(){
  if(over2) {
    follow2 = true
  }  
  if(over) {
    follow = true
  }
}
function mouseReleased(){
  follow = false
  follow2 = false
}
