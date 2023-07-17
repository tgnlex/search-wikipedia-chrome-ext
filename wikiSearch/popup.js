document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("button1").addEventListener("click", function(){
        chrome.tabs.create({url : "https://www.wikipedia.com"})
    });
});