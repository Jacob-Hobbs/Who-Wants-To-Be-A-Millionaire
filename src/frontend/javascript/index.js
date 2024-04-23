document.getElementById("popoutButton").addEventListener("click", function() {
    showAside();
});

let asideOpen = false;

//function to show aside
function showAside() {
    const aside = document.getElementById("levelAside");
    const questionScreen = document.getElementById("questionScreen");
    asideOpen = true;
    aside.style.width = "250px";
    aside.style.visibility = "visible";
    questionScreen.style.zIndex = "1";



    // aside.style.width = "250px";
    // aside.style.visibility = "visible";
    // aside.style.transition = "width 0.8s ease";
    // aside.style.zIndex = "2";
}

// function to hide aside
function hideAside() {
    const aside = document.getElementById("levelAside");
    aside.style.width = "0px";
    aside.style.visibility = "none";
}