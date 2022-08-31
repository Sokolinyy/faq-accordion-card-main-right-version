function rotate(element, rotation) { // 
  document.querySelector(element).style.transform = `rotate(${rotation}deg)`
}


function infoButtonRender(button_id, div_id, img_id) {
  document.getElementById(button_id).addEventListener("click", function() {
    info = document.getElementById(div_id)
    if (info.style.display == "none") {
      enable = true
      rotate(img_id, 180)
      info.style.display = "block";
    }
    else {
      enable1 = true
      rotate(img_id, 0)
      info.style.display = "none";
    }
  });
}
  infoButtonRender("button1", "info1", "#arrow-icon1")
  infoButtonRender("button2", "info2", "#arrow-icon2")
  infoButtonRender("button3", "info3", "#arrow-icon3")
  infoButtonRender("button4", "info4", "#arrow-icon4")
  infoButtonRender("button5", "info5", "#arrow-icon5")