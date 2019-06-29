var isComponentName = function (componentName) { return function (child) {
    return Boolean(typeof child.type === "function" && child.type.name === componentName);
}; };

var isReactElement = function (child) {
    return Boolean(child && typeof child === "object" && "type" in child && typeof child.type === "function");
};

var isNumber = function (value) {
    return Boolean(typeof value === "number" && isFinite(value));
};

export { isComponentName, isNumber, isReactElement };
