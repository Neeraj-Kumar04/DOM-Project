/* This JavaScript code is setting up an event listener on a container element with the id "container".
When this container is double-clicked, it triggers a series of animations on an element selected
with the CSS selector "i". */

var con = document.querySelector("#container")
var love = document.querySelector("i")

con.addEventListener("dblclick",function(){
    love.style.transform=" translate(-50%,-50%) scale(1)"
    love.style.opacity=0.8

    setTimeout(function(){
        love.style.transform=" translate(-50%,-50%) scale(0)"
    },1000)

    setTimeout(function(){
        love.style.transform=" translate(-50%,-50%) scale(0)"
    },2000)
})

