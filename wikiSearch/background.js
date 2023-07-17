chrome.runtime.onInstalled.addListener(() => {
    console.log("Hello World");


//receiving a message
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
        console.log(sender.tab ? 
                    "from a content script" + sender.tab.url :
                    "from the extension");
        if (request.greeting === "hello")
            sendResponse({farewell: "goodbye"});
      }
    );

    //create context menu
    chrome.contextMenus.create({
        id: "wikipedia",
        title: "search for: \"%s\" on wikipedia",
        contexts: ["selection"],
    });

    
});
//listen for context menu
chrome.contextMenus.onClicked.addListener(function(info, tab){
    //the URl that will be added
    baseURL = "http://en.wikipedia.org/wiki/";
    var newURL = baseURL + info.selectionText;
    //create new URL in the user's browser
    chrome.tabs.create({ url: newURL });
});

