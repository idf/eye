var refresh = function() {
    chrome.tabs.getSelected(null, function(tab) {
        var code = 'window.location.reload();';
        chrome.tabs.executeScript(tab.id, {code: code});
    });
};

function option_0() {
  chrome.storage.sync.set({
    "click": 0
  }, function() {
      refresh();
  });
}

function option_1() {
  chrome.storage.sync.set({
    "click": 1
  }, function() {
      refresh();
  });
}

function option_2() {
  chrome.storage.sync.set({
    "click": 2
  }, function() {
      refresh();
  });
}

function option_3() {
  chrome.storage.sync.set({
    "click": 3
  }, function() {
      refresh();
  });
}

function option_4() {
  chrome.storage.sync.set({
    "click": 4
  }, function() {
      refresh();
  });
}

document.getElementById("0").addEventListener("click", option_0);
document.getElementById("1").addEventListener("click", option_1);
document.getElementById("2").addEventListener("click", option_2);
document.getElementById("3").addEventListener("click", option_3);
document.getElementById("4").addEventListener("click", option_4);