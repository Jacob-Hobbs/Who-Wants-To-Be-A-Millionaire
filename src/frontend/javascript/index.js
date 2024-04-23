document.getElementById("popoutButton").addEventListener("click", function() {
    toggleAside();
});

//FIXME: This should toggle the aside of the main page
function toggleAside() {
    const aside = document.getElementById("levelAside");
    console.log("SEEN!");
    if (aside.style.width === "0px") {
        aside.style.width = "250px";
        aside.style.visibility = "visible";
    }
}