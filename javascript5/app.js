let bg_color = document.getElementById("bgColorInput");
let Color_Input = document.getElementById("fontColorInput");
let Size_Input = document.getElementById("fontSizeInput");
let font_Weight = document.getElementById("fontWeightInput");
let padding = document.getElementById("paddingInput");
let border_Radius = document.getElementById("borderRadiusInput");
let custom_Button = document.getElementById("customButton");



function applybutton() {
    let background = bg_color.value;
    let colorinput = Color_Input.value;
    let size = Size_Input.value;
    let weight = parseInt(font_Weight.value);
    let paddingspace = padding.value;
    let border = border_Radius.value;
    custom_Button.style.backgroundColor = background;
    custom_Button.style.color = colorinput;
    custom_Button.style.fontSize = size;
    custom_Button.style.fontWeight = weight;
    custom_Button.style.padding = paddingspace;
    custom_Button.style.borderRadius = border;
    console.log(border);

}