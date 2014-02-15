chrome.browserAction.onClicked.addListener(function(tab) {
  console.log("Happy Valentine's!")
  chrome.tabs.executeScript(null, {
    file: "application.js"
  });
});