const article = document.getElementById("article");
const footer = document.getElementById("footer");
const startGameButton = document.getElementById("startGameButton");
const rulesButton = document.getElementById("rulesButton");
const logoImage = document.getElementById("logoImage");
const mainTitleButton = document.getElementsByClassName("mainTitleButton");
let screenResized = false;

// Controls state of viewport according to screen width.
window.addEventListener("resize", layoutConditions);
window.addEventListener("DOMContentLoaded", layoutConditions);

// This function executes according to window conditions defined above.
function layoutConditions() {
    let screenHeight = window.innerHeight;
    if (screenHeight > 550 && screenResized === true) {
        revertLayoutChanges();
    } else if (screenHeight <= 550) {
        changeLayout();
        screenResized = true;
    }
}

// Define new div for holding title buttons for mobile viewport.
let newDiv = document.createElement("div");
newDiv.style.display = "flex";
newDiv.style.flexDirection = "column";
newDiv.style.height = "55vh";
newDiv.style.width = "30%"
newDiv.style.alignItems = "center";
newDiv.style.justifyContent = "center";


// Shifts elements to accommodate mobile browsers.
function changeLayout() {
    header.style.height = "0";
    footer.style.height = "0";
    article.appendChild(newDiv);
    article.style.height = "99vh";
    logoImage.style.marginRight = "5px";
    logoImage.style.marginLeft = "80px";
    logoImage.style.height = "80vh";
    newDiv.appendChild(startGameButton);
    newDiv.appendChild(rulesButton);
    startGameButton.style.marginRight = "0";
    startGameButton.style.marginTop = "0";
}

// Reverts changes to elements to accommodate larger viewports.
function revertLayoutChanges() {
    header.style.height = "10vh";
    footer.style.height = "25vh";
    article.removeChild(newDiv);
    footer.appendChild(startGameButton);
    footer.appendChild(rulesButton);
    article.style.height = "60vh";
    logoImage.style.marginRight = "0";
    logoImage.style.marginLeft = "0";
    logoImage.style.height = "55vh";
    startGameButton.style.marginRight = "130px";
    startGameButton.style.marginTop = "30px";
}

