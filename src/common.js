exports.install = function (Vue, options) {
    Vue.prototype.GetServerUrl = function () {
        return "http://www.gozh.io:8080";
    };
};