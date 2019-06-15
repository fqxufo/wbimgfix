chrome.webRequest.onBeforeSendHeaders.addListener(
    function (details) {
        if (details.type == 'image') {
            for (var i = 0; i < details.requestHeaders.length; ++i) {
                if (details.requestHeaders[i].name === 'Referer') {
                    details.requestHeaders.splice(i, 1);
                    break;
                }
            }
            console.log(details.requestHeaders)
            return { requestHeaders: details.requestHeaders };
        }
    },
    { urls: ["*://*.sinaimg.cn/*"] },
    ["blocking", "requestHeaders", 'extraHeaders']);



     
   