var exec = require('cordova/exec');

var MobileLoginPlugin = { 
    onekey_init: function(
        sdkInfo,
        success,
        error        
    ) {
       exec(success, error, 'MobileLoginPlugin', 'onekey_init', [sdkInfo]);
    },
    onekey_login: function(
        success,
        error        
    ) {
        cordova.require('cordova/channel').onCordovaReady.subscribe(function(){
            exec(success, error, 'MobileLoginPlugin', 'onekey_login', ['']);
        });
    }
}

module.exports = MobileLoginPlugin