(function(){
    var epochTime = (new Date()).getTime();
    var url = window.location.href;

    chrome.runtime.sendMessage({
        "name":'pageContent',
        "time":epochTime,
        "url":url,
        "html":document.documentElement.innerHTML,
        "title":document.title,
    });
})();
