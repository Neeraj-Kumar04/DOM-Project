var main = document.querySelector("#main");
var crsr = document.querySelector(".cursor");

main.addEventListener("mousemove", function(dets) {
    // The dets object contains information about the mouse movement event
    // Update the position of the custom cursor based on the mouse's X and Y coordinates
    crsr.style.left = dets.x + "px"; // Set the horizontal position
    crsr.style.top = dets.y + "px";  // Set the vertical position
});
