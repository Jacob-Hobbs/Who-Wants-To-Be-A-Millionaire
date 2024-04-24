const aside = document.getElementById("levelAside");
const questionScreen = document.getElementById("questionScreen");
const container = document.getElementById("container");
const popoutButton = document.getElementById("popoutButton");
const walkAwayButton = document.getElementById("walkAwayButton");
const levelDiv = document.getElementById("levelDiv");
let asideOpen = false;
let screenResizedWithAsideOpen = false;
document.getElementById("popoutButton").addEventListener("click", function() {
    if (asideOpen === false) {
        popoutButton.style.backgroundImage = "url('../css/resources/popback.png')";
        popoutButton.style.transition = "margin-right 0.8s ease";
        showAside();
    } else {
        popoutButton.style.backgroundImage = "url('../css/resources/popout.png')";
        popoutButton.style.transition = "right 0.8s ease";
        hideAside();
    }
});

//function to show aside
function showAside() {

    asideOpen = true;
    container.style.display = "flex";
    container.style.flexDirection = "row-reverse";
    aside.style.width = "35%";
    aside.style.visibility = "visible";
    aside.style.transition = "width 0.8s ease";

    levelDiv.style.visibility = "visible";
    walkAwayButton.style.visibility = "visible";



    questionScreen.style.zIndex = "1";
    questionScreen.style.position = "absolute";
    aside.style.position = "absolute";
    popoutButton.style.marginRight = "35vw";

    popoutButton.addEventListener("mouseover", () => {
        popoutButton.style.backgroundImage = "url('../css/resources/popbackHover.png')";
        popoutButton.style.transition = "0.3s";
    })
    popoutButton.addEventListener("mouseout", () => {
        popoutButton.style.backgroundImage = "url('../css/resources/popback.png')";
        popoutButton.style.transition = "0.3s";
    })

}

// function to hide aside
function hideAside() {
    asideOpen = false;
    container.style.flexDirection = "row";
    aside.style.width = "0";
    levelDiv.style.visibility = "hidden";
    walkAwayButton.style.visibility = "hidden";



    questionScreen.style.position = "relative";
    aside.style.position = "relative";
    popoutButton.style.marginRight = "0";

    popoutButton.addEventListener("mouseover", () => {
        popoutButton.style.backgroundImage = "url('../css/resources/popoutHover.png')";
        popoutButton.style.transition = "0.3s";
    })
    popoutButton.addEventListener("mouseout", () => {
        popoutButton.style.backgroundImage = "url('../css/resources/popout.png')";
        popoutButton.style.transition = "0.3s";
    })

}

//FIXME: Aside will popout using above functions, however resizing the
// window leaves a white rectangle to the side of the questionScreen div.

let screenWidth = window.innerWidth;

window.addEventListener('resize', function() {
    screenWidth = window.innerWidth;

    if ((screenWidth > 1000) && asideOpen === true) {
        hideAside();
        questionScreen.style.width = "78%";
        aside.style.width = "22%";
        aside.style.visibility = "visible";
        levelDiv.style.visibility = "visible";
        walkAwayButton.style.visibility = "visible";
        questionScreen.style.position = "relative";
        aside.style.position = "relative";
        // TODO: Added below line as condition for resizing when aside is open.
        screenResizedWithAsideOpen = true;
    }
});
