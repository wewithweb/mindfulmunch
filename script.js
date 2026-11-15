var NUMBER = "918850124145"; // WhatsApp number: country code + number, no + or spaces
var burger = document.getElementById("burger"), menu = document.getElementById("menu");
function setMenu(o){menu.classList.toggle("open",o);burger.setAttribute("aria-expanded",o);burger.setAttribute("aria-label",o?"Close menu":"Open menu")}
burger.addEventListener("click",function(){setMenu(!menu.classList.contains("open"))});
menu.addEventListener("click",function(e){if(e.target.tagName==="A")setMenu(false)});
var sel = document.getElementById("svc"), buy = document.getElementById("buy");
function link(t){return "https://wa.me/" + NUMBER + "?text=" + encodeURIComponent(t)}
function update(){
  var s = sel.value;
  var topic = s === "Not sure yet" ? "" : " for " + s;
  buy.href = link("Hi Mindful Munch! I’m interested in the Personalised Diet Plan (₹1,999)" + topic + ". Could you please share the next steps?");
}
sel.addEventListener("change", update); update();
var gen = link("Hi Mindful Munch! I’d like to know more about your services.");
document.getElementById("chat").href = gen;
document.getElementById("float").href = gen;
