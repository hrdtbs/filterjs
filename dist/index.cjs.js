'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isComponentName = function (componentName) { return function (child) {
    return Boolean(typeof child.type === "function" && child.type.name === componentName);
}; };

var isReactElement = function (child) {
    return Boolean(child && typeof child === "object" && "type" in child && typeof child.type === "function");
};

var isNumber = function (value) {
    return Boolean(typeof value === "number" && isFinite(value));
};

exports.isComponentName = isComponentName;
exports.isNumber = isNumber;
exports.isReactElement = isReactElement;
