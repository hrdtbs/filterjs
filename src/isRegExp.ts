export const isRegExp = (value: any): value is RegExp => {
    return Boolean(Object.prototype.toString.call(value) === "[object RegExp]")
}
