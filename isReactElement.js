"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isReactElement = function (child) {
    return Boolean(child && typeof child === "object" && "type" in child && typeof child.type === "function");
};
