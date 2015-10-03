var refresh = function(){
  chrome.tabs.getSelected(null, function(tab) {
    click_time = click_time + 1;
    chrome.tabs.reload(tab.id);
  });
}

function option_0() {
  chrome.storage.sync.set({
    "click": 0
  }, function() {
    if(click_time == 0) refresh();
    refresh();
    window.close();
  });
}

function option_1() {
  chrome.storage.sync.set({
    "click": 1
  }, function() {
    if(click_time == 0) refresh();
    refresh();
    window.close();
  });
}

function option_2() {
  chrome.storage.sync.set({
    "click": 2
  }, function() {
    if(click_time == 0) refresh();
    refresh();
    window.close();
  });
}

function option_3() {
  chrome.storage.sync.set({
    "click": 3
  }, function() {
    if(click_time == 0) refresh();
    refresh();
    window.close();
  });
}

function option_4() {
  chrome.storage.sync.set({
    "click": -1
  }, function() {
    if(click_time == 0) refresh();
    refresh();
    window.close();
  });
}

function end() {
  var element = document.getElementById("scrollbar");
  var a = element.scrollLeft;
  var b = element.offsetWidth;
  var c = a / b / 40;
  show(Math.floor(c * 10));
  chrome.storage.sync.set({
    "mouseup": c
  }, function() {
    if(click_time == 0) refresh();
    refresh();
  });
}

function begin() {
  var element = document.getElementById("scrollbar");
  var a = element.scrollLeft;
  var b = element.offsetWidth;
  var c = a / b / 4;
  show(Math.floor(c));
}

function show(c) {
  diopter = c;
  var element = document.getElementById("popup");
  element.innerHTML = diopter.toString();
}

document.getElementById("0").addEventListener("click", option_0);
document.getElementById("1").addEventListener("click", option_1);
document.getElementById("2").addEventListener("click", option_2);
document.getElementById("3").addEventListener("click", option_3);
document.getElementById("4").addEventListener("click", option_4);
var text = document.getElementById("scrollbar");
text = document.getElementById("scrollbar");
text = document.getElementById("scrollbar");
text.onmousedown = begin;
text.onmouseup = end;
var click_time = 0;
var diopter = 0;