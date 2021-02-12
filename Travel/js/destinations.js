"use strict";

var xmlHttp = new XMLHttpRequest();
// xmlHttp.responseText = 'text';
xmlHttp.open('GET', 'data.json',true);

xmlHttp.onload = function() {
  console.log(this.readyState);
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
    span.innerHTML = element.date

    let h2Front = document.createElement("h2");
    divPostInfo.appendChild(h2Front);
    h2Front.innerHTML = element.title

    let divBack = document.createElement("div");
    divBack.className = "post-back";
    divPost.appendChild(divBack);

    let divEx = document.createElement("div");
    divEx.className = "post-excerpt";
    divBack.appendChild(divEx);

    let h2Back = document.createElement("h2");
    divEx.appendChild(h2Back);
    h2Back.innerHTML = element.price

    let p = document.createElement("p");
    divEx.appendChild(p);
    p.innerHTML = element.description

    let a = document.createElement("a");
    divBack.appendChild(a);
    a.href = "#";
    a.innerHTML = "Read More";
  }