var browser = require('cordova/platform');
var cordova = require('cordova');

var mission = "我々は、ソフトウェアを人々の身近な存在にし、世界に新しい日常を提供し続けます。";
var vision = "自らの技術力と人間力で 「あらゆる機器・サービス・人」をつなげ、ユーザ・業界・地域の課題を解き続けるイノベーションソフトウェア会社となる。";

var coreValues = {
  "UserFirst": "ユーザのことを一番に考え、期待を超える",
  "ThinkBig": "大胆に構想し、出来ない理由ではなく可能にする手段を考える",
  "Challenge": "チャンスを逃さず、挑戦することをためらわない",
  "Commitment": "プロのビジネスパーソンとして妥協せず、継続して最後までやりきる",
  "Professionalism": "得意分野を作り出し、専門性で尖り続ける",
  "Collaboration": "ひとりひとりに敬意を払い、互いの英知を結集する",
  "DeliverWOW": "ワクワクを作ってワクワクを提供する",
  "Simplicity": "合理性を重んじ、ものごとをシンプルに進める",
  "Evolution": "現状に満足することなく変革し続ける",
  "Frugality": "コストを意識し、常に創意工夫を心がける"
};

function getMission() {
  return mission;
}

function getVision() {
  return vision;
}

function getCoreValues() {
  return Object.keys(coreValues).map(function(k) { return coreValues[k]; });
}

module.exports = {
  fetchMission: function(success, error) {
    setTimeout(function () {
      success(getMission());
    }, 0);
  },
  fetchVision: function(success, error) {
    setTimeout(function () {
      success(getVision());
    }, 0);
  },
  fetchCoreValues: function(success, error) {
    setTimeout(function () {
      success(getCoreValues());
    }, 0);
  }
};

require("cordova/exec/proxy").add("mvc", module.exports);
