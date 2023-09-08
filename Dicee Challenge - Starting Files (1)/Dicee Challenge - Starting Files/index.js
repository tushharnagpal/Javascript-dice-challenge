var randomnumber1 = Math.floor(Math.random()*7);
var randomimg = "dice" + randomnumber1 + ".png";
var randomsource = "images/" + randomimg;
var image1 = document.querySelectorAll("img")[0] 
image1.setAttribute("src" , randomsource);

var randomnumber2 = Math.floor(Math.random()*7);
var randomimg2 = "dice" + randomnumber2 + ".png";
var randomsource2 = "images/" + randomimg2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" , randomsource2);

if (randomnumber1 > randomnumber2) {
    document.querySelectorAll("h1").innerHTML = "player 1 wins"
}
else if (randomimg2 > randomnumber1) {
    document.querySelectorAll("h1").innerHTML = "player 2 wins"
}
else {
    document.querySelectorAll("h1").innerHTML = "Draw"
}