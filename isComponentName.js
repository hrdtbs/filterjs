"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isComponentName = function (componentName) { return function (child) {
    return Boolean(typeof child.type === "function" && child.type.name === componentName);
}; };
