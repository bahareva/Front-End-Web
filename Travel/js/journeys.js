"use strict";

var xmlHttp = new XMLHttpRequest();
xmlHttp.open('GET', 'journeysData.json',true);
// xmlHttp.responseText = 'text';

xmlHttp.onload = function() {
  if (xmlHttp.status == 200) {
    var arr = JSON.parse(this.responseText);
    populateView(arr)
  }
}
xmlHttp.send();

function populateView(elements) {
  elements.forEach(element => createElment(element));
}

let container = document.getElementById("container")

  function createElment(element) {
    let divPostWrap = document.createElement("div");
    divPostWrap.className = "post-wrap"
    divPostWrap.addEventListener("mouseover", function() {
      divPostWrap.style.borderRadius = "15px";
      divPostWrap.style.transform = "scale(1.2)";
      divPostWrap.style.transition = "all 0.3s ease";
    });
    divPostWrap.addEventListener("mouseout", function() {
      divPostWrap.style.border = "none";
      divPostWrap.style.transform = "scale(1)"
    });
    container.appendChild(divPostWrap);

    let divPost = document.createElement("div");
    divPost.className = "post"
    divPostWrap.appendChild(divPost); 

    let divPostFront = document.createElement("div");
    divPostFront.className = "post-front";
    divPost.appendChild(divPostFront);

    let divPostImage = document.createElement("div");
    divPostImage.className = "post-img";
    divPostImage.style.backgroundImage = element.image;
    divPostFront.appendChild(divPostImage);

    let divPostInfo = document.createElement("div");
    divPostInfo.className = "post-info";
    divPostFront.appendChild(divPostInfo);

    let span = document.createElement("span");
    divPostInfo.appendChild(span);
    span.innerHTML = element.price

    let h2Front = document.createElement("h2");
    divPostInfo.appendChild(h2Front);
    h2Front.innerHTML = element.title
 }