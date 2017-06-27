(function(global,chrome){
var util = (function(){
    var tool = {};
    tool.$ = global.$;
    tool.sendNotice = function(options) {
    chrome.notifications.create(options.type, {
        type: "basic",
        iconUrl: "../assets/icon.png",
        title: options.title,
        message: options.message
    })
    }
    return tool;
})()
global.tool = util;

chrome.runtime.onInstalled.addListener(function () {
    //创建右键菜单
    chrome.contextMenus.create({
        "title": "设置",
        "id": 'setting',
        'contexts': ["browser_action"]
    }, function (err) {
        console.log('err', err);
    });
});
/**
 * 点击右键
 */
chrome.contextMenus.onClicked.addListener(function (data) {
    console.log("点击右键", data);
    if (data.menuItemId == 'setting') {

    }
});
/**
 * 左键点击图标后
 */
chrome.browserAction.onClicked.addListener(function () {
    console.log('点击了左键action');
    //主页
    chrome.tabs.create({
        url: '../client/dist/index.html'
    });
});
})(window,chrome)




