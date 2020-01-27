var globalPebl = window.top.PeBL;

var config = {};

globalPebl.extension.config = config;

window.Configuration = {}
window.Configuration.lrsUrl = 'https://cloud.scorm.com/lrs/B8O8KG6QFQ/sandbox/'; //TODO: CHANGE ME
window.Configuration.lrsCredential = 'ayZt3IP7AhU7tYmCMSw:gKBi5KFw_Ju3Q6MtF50'; //TODO: CHANGE ME
window.Configuration.useLinkedIn = false;
window.Configuration.favicon = 'image/eXtension-icon_small.png';

var config = {};

globalPebl.extension.config = config;

// These functions run when the page is loaded.
config.onLoadFunctions = {

}
// Data Entry extension config
config.dataEntry = {

}
// lowStakes Quiz extension config
config.lowStakesQuiz = {

}

$(document).ready(function() {
    if (config.onLoadFunctions) {
        Object.values(config.onLoadFunctions).forEach(function(value) {
            if (typeof value === "function") {
                value();
            }
        });
    }
});
