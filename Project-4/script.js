var arr = [
    {
        dp: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1617258856138-402b60da4e2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
        name: "Mehar"
    },
    {
        dp: "https://images.unsplash.com/photo-1617688893876-50c9b3689d5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
        story: "https://images.unsplash.com/photo-1610202631408-fa6ba0f39ca3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Shanvi"
    },
    {
        dp: "https://images.unsplash.com/photo-1562572159-4efc207f5aff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1610047592780-aa246f5635c2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Priti"
    },
    {
        dp: "https://images.unsplash.com/photo-1562904403-a5106bef8319?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1604681527661-41ab3a47b2c4?q=80&w=1408&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Drishti"
    },
    {
        dp: "https://images.unsplash.com/photo-1612811858966-eb7840a6a1cc?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1619947663603-9eac34f2230f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Aman"
    }
];

var stories = document.querySelector("#stories");
var header = document.querySelector("#header");
var fullScreen = document.querySelector("#full-screen");
var clutter = "";

// Generate story elements
arr.forEach(function (elem, idx) {
    clutter += `
        <div class="story">
            <img id="${idx}" src="${elem.dp}" alt="story post">
            <p>${elem.name}</p>
        </div>`;
});

stories.innerHTML = clutter;

// Handle story click events
stories.addEventListener("click", function (dets) {
    if (dets.target.tagName === "IMG") {
        // Show full-screen story
        fullScreen.style.display = "block";
        fullScreen.style.backgroundImage = `url(${arr[dets.target.id].story})`;

        // Hide the header
        header.style.display = "none";

        // Hide story after 3 seconds and restore the header
        setTimeout(function () {
            fullScreen.style.display = "none";
            header.style.display = "flex";
        }, 3000);
    }
});

// Exit full-screen on click
fullScreen.addEventListener("click", function () {
    fullScreen.style.display = "none";
    header.style.display = "flex"; // Restore the header
});
