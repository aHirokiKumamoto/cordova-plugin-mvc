var exec = require('cordova/exec');

module.exports = {
  fetchMission: function(success, error) {
    exec(success, error, "mvc", "fetchMission", []);
  },
  fetchVision: function(success, error) {
    exec(success, error, "mvc", "fetchVision", []);
  },
  fetchCoreValues: function(success, error) {
    exec(success, error, "mvc", "fetchCoreValues", []);
  },
  version: function() {
    return "0.0.2";
  }
};
