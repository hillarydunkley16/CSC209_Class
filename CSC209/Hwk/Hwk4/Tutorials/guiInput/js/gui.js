document.addEventListener("DOMContentLoaded", function () {
    const toggleImage = document.getElementById("toggleImage");
    const imgContainer = document.getElementById("imgContainer");
    const textStyleRadios = document.getElementsByName("textStyle");
    const text = document.getElementById("content");
    const txtColorPicker = document.getElementById("txtColorPicker");
    const bgColorPicker = document.getElementById("bgColorPicker");
    
    toggleImage.addEventListener("change", function () {
        imgContainer.style.display = toggleImage.checked ? "block" : "none";
    });
    
    textStyleRadios.forEach(radio => {
        radio.addEventListener("change", function () {
            text.style.fontWeight = this.value === "bold" ? "bold" : "normal";
            text.style.fontStyle = this.value === "italic" ? "italic" : "normal";
            text.style.fontSize = this.value === "noglasses" ? "48px" : "20px";
        });
    });
    
    bgColorPicker.addEventListener("input", function () {
        document.body.style.backgroundColor = this.value;
    });
    txtColorPicker.addEventListener("input", function () {
        text.style.color = this.value;
    });
});
