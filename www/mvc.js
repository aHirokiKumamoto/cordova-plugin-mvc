var exec = require('cordova/exec');

module.exports = {
  coolMethod: function(arg0, success, error) {
    //exec(success, error, "mvc", "coolMethod", [arg0]);
  },
  echo: function(str) {
    return str;
  }
};
