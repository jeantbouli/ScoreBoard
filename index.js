let  homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");
const plusOne = document.getElementById("plus1-home")
const plusTwo = document.getElementById("plus2-home")
const plusThree = document.getElementById("plus3-home")
const plusOnee = document.getElementById("plus1-guest")
const plusTwoo = document.getElementById("plus2-guest")
const plusThreee = document.getElementById("plus3-guest")
const homeResetEl = document.getElementById("home-reset")
const guestResetEl = document.getElementById("guest-reset")
plusOne.addEventListener("click", function () {
    homeScoreEl.textContent++;
  });

plusTwo.addEventListener("click", function(){
    homeScoreEl.textContent = Number(homeScoreEl.textContent) + 2
})

plusThree.addEventListener("click", function(){
    homeScoreEl.textContent = Number(homeScoreEl.textContent) + 3
})
homeResetEl.addEventListener("click", function(){
    homeScoreEl.textContent = 0
})

plusOnee.addEventListener("click", function () {
    guestScoreEl.textContent++;
  });
 
  plusTwoo.addEventListener("click", function(){
    guestScoreEl.textContent = Number(guestScoreEl.textContent) + 2
})
plusThreee.addEventListener("click", function() {
    guestScoreEl.textContent = Number(guestScoreEl.textContent) + 3
})

guestResetEl.addEventListener("click", function() {
    guestScoreEl.textContent = 0
})  
