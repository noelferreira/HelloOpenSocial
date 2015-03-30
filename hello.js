function renderInfo(){
    var state = wave.getState();
    var html = "";
    html += '<div style="width: 50px; height:50px; margin-left: 10px; margin-top: 10px; background-color: red;">';
    document.getElementById('body').innerHTML = html;
}

function init() {
    if (wave && wave.isInWaveContainer()) {
        // Loads the gadget's initial state and the subsequent changes to it
        wave.setStateCallback(renderInfo);
        
        // Loads participants and any changes to them
        wave.setParticipantCallback(renderInfo);
    }
}

// Initializes gadget after receiving a notification that the page is loaded and the DOM is ready.
gadgets.util.registerOnLoadHandler(init);
