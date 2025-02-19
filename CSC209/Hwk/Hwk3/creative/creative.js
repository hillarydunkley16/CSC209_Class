function toggleTheme(){
    let stylesheet = document.getElementById("themeStylesheet");
    if (stylesheet.getAttribute("href") == "creative1.css"){
        stylesheet.setAttribute("href", "creative2.css");
    } else {
        stylesheet.setAttribute("href", "creative1.css");
    }
}
function toggleText(){
    let text = document.getElementById("readmeText");
    if (text.style.display === "none"){
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}