chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
        if (/^https:\/\/www\.google/.test(current_tab_info.url)) {
            chrome.tabs.insertCSS(null, {file: './myStyles.css'});
            chrome.tabs.executeScript(null, {file: './foreground.js'}, () => console.log('i injected'))
        }
    });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message == 'yo check the storage') {
        chrome.storage.local.get("password", value => {
            console.log(value)
        });
    }
});