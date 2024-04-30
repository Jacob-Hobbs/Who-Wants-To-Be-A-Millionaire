const aside = document.getElementById("levelAside");
const questionScreen = document.getElementById("questionScreen");
const container = document.getElementById("container");
const popoutButton = document.getElementById("popoutButton");
const walkAwayButton = document.getElementById("walkAwayButton");
const levelDiv = document.getElementById("levelDiv");
let walkAwayDiv = document.getElementById("walkAwayDiv");
let header = document.getElementById("header");
let asideOpen = false;


document.getElementById("popoutButton").addEventListener("click", function() {
    if (asideOpen === false) {
        popoutButton.style.backgroundImage = "url('../css/resources/popback.png')";
        popoutButton.style.transition = "margin-right 0.8s ease";
        openAside();
    } else {
        popoutButton.style.backgroundImage = "url('../css/resources/popout.png')";
        popoutButton.style.transition = "right 0.8s ease";
        closeAside();
    }
});

// This function is to only be used when the screen is resized to above 1000px
function resetAsideToOpenConditions() {
    asideOpen = true;
    aside.style.width = "22%";
    aside.style.visibility = "visible";
    aside.style.position = "relative";
    questionScreen.style.width = "78%";
    questionScreen.style.position = "relative";
    container.style.flexDirection = "row";
    levelDiv.style.visibility = "visible";
    walkAwayButton.style.visibility = "visible";
}

// This function is to only be used when the screen is resized to below 1000px
function resetAsideToClosedConditions() {
    asideOpen = false;
    aside.style.width = "0";
    aside.style.visibility = "hidden";
    aside.style.position = "relative";
    questionScreen.style.width = "100%";
    questionScreen.style.position = "relative";
    container.style.flexDirection = "row";
    levelDiv.style.visibility = "hidden";
    walkAwayButton.style.visibility = "hidden";
    popoutButton.style.transition = "none";
    popoutButton.style.right = "30px";
    popoutButton.style.position = "relative";
    popoutButton.style.marginRight = "0";
    popoutButton.style.backgroundImage = "url('../css/resources/popout.png')";
    setPopoutButtonImage("out");
}

// Controls state of viewport according to screen width
window.addEventListener('resize', function() {
    let screenWidth = window.innerWidth;
    if (screenWidth > 1000) {
        resetAsideToOpenConditions();
    } else if (screenWidth <= 1000) {
        resetAsideToClosedConditions();
    }
});

// This function controls what will happen when the popout button is pressed when the
// aside is not currently open
function openAside() {
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    aside.style.transition = "width 0.8s ease";

    // reposition popoutButton if screen < 550 px
    if (screenWidth < 550) {
        aside.style.width = "75%";
        walkAwayDiv.appendChild(popoutButton);
        popoutButton.style.right = "0";
        popoutButton.style.marginRight = "0";
        popoutButton.style.top = "0";
        popoutButton.style.marginLeft = "30px";
    } else if (screenHeight < 550) {
        aside.style.width = "40%";
        walkAwayDiv.appendChild(popoutButton);
        popoutButton.style.right = "0";
        popoutButton.style.marginRight = "0";
        popoutButton.style.top = "0";
        popoutButton.style.marginLeft = "30px";
        popoutButton.style.transform = "translateY(-15px)";
    } else {
        aside.style.width = "35%";
        popoutButton.style.marginRight = "35vw";
    }

    asideOpen = true;
    container.style.display = "flex";
    container.style.flexDirection = "row-reverse";
    aside.style.visibility = "visible";
    levelDiv.style.visibility = "visible";
    walkAwayButton.style.visibility = "visible";
    questionScreen.style.zIndex = "1";
    questionScreen.style.position = "absolute";
    aside.style.position = "absolute";

    setPopoutButtonImage("in");
}

// This function controls what will happen when the popout button is pressed when the
// aside is open
function closeAside() {
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    aside.style.transition = "width 0.8s ease";
    levelDiv.style.transition = "width 0.8s ease";

    if (screenWidth < 550) {
        header.appendChild(popoutButton);
        popoutButton.style.top = "30px";
    } else if (screenHeight < 550) {
        header.appendChild(popoutButton);
        popoutButton.style.top = "30px";
        popoutButton.style.transform = "translateY(0px)"
    }

    asideOpen = false;
    aside.style.width = "0";
    aside.style.position = "relative";
    questionScreen.style.width = "100%";
    questionScreen.style.position = "relative";
    container.style.flexDirection = "row";
    levelDiv.style.visibility = "hidden";
    walkAwayButton.style.visibility = "hidden";
    walkAwayButton.style.transition = "width 0.8s ease";
    popoutButton.style.transition = "none";
    popoutButton.style.right = "30px";
    popoutButton.style.position = "relative";
    popoutButton.style.marginRight = "0";
    setPopoutButtonImage("out");
}

// Used to set the image of the popoutButton based on user action
function setPopoutButtonImage(direction) {
    if (direction === "out") {
        setPopoutButtonEventListener("popout");
    } else if (direction === "in") {
        setPopoutButtonEventListener("popback");
    }
}

// Used within setPopoutButtonImage; created to minimize code redundancy
function setPopoutButtonEventListener(name) {
    popoutButton.addEventListener("mouseover", () => {
        popoutButton.style.backgroundImage = "url('../css/resources/" + name + "Hover.png')";
        popoutButton.style.transition = "0.3s";
    })
    popoutButton.addEventListener("mouseout", () => {
        popoutButton.style.backgroundImage = "url('../css/resources/" + name + ".png')";
        popoutButton.style.transition = "0.3s";
    })
}




