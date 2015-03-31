// function renderInfo(){
//     var state = wave.getState();
//     var html = "";
//     html += '<div style="width: 50px; height:50px; margin-left: 10px; margin-top: 10px; background-color: red;">';
//     document.getElementById('footer').innerHTML = html;
//     alert('Running');
// }

// function init() {
//     if (wave && wave.isInWaveContainer()) {
//         // Loads the gadget's initial state and the subsequent changes to it
//         wave.setStateCallback(renderInfo);
        
//         // Loads participants and any changes to them
//         wave.setParticipantCallback(renderInfo);
//     }
// }

// // Initializes gadget after receiving a notification that the page is loaded and the DOM is ready.
// gadgets.util.registerOnLoadHandler(init);

function getHtml() {    
  var params = {};  
  params[gadgets.io.RequestParameters.CONTENT_TYPE] = gadgets.io.ContentType.TEXT;  
  var url = "http://www.google.com";  
  gadgets.io.makeRequest(url, response, params);
};
function response(obj) {  
  //obj.text contains the text of the page that was requested  
  var str = obj.text;
  var html =  str.substr(0,400);  
  document.getElementById('content_div').innerHTML = html;
};
gadgets.util.registerOnLoadHandler(getHtml);
