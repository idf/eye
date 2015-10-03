function option_0() {
  chrome.storage.sync.set({
    "click": 0
  }, function() {
  });
}

function option_1() {
  chrome.storage.sync.set({
    "click": 1
  }, function() {
  });
}

function option_2() {
  chrome.storage.sync.set({
    "click": 2
  }, function() {
  });
}

function option_3() {
  chrome.storage.sync.set({
    "click": 3
  }, function() {
  });
}

function option_4() {
  chrome.storage.sync.set({
    "click": 4
  }, function() {
  });
}

document.getElementById("0").addEventListener("click", option_0);
document.getElementById("1").addEventListener("click", option_1);
document.getElementById("2").addEventListener("click", option_2);
document.getElementById("3").addEventListener("click", option_3);
document.getElementById("4").addEventListener("click", option_4);
