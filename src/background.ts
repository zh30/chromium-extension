chrome.browserAction.onClicked.addListener(tab => {
  // Send a message to the active tab
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    var activeTab: chrome.tabs.Tab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id!, {
      message: "clicked_browser_action"
    });
  });
});

export {};
