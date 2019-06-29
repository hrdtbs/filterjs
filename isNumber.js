"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = function (value) {
    return Boolean(typeof value === "number" && isFinite(value));
};
