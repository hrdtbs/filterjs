export const isObject = (value: any): value is object => {
    return Boolean(Object.prototype.toString.call(value) === "[object Object]")
}
