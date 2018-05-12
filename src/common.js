exports.install = function (Vue, options) {
    Vue.prototype.GetServerUrl = function () {
        return "/api";
    };
};