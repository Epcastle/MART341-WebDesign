let i = 0;
function change() {
  let doc = document.getElementById("background");
  let color = ["#ff00ff", "#006699", "#00cc99", "#33ccff"];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 1000);
