export const isDate = (value: any): value is Date => {
    return Boolean(Object.prototype.toString.call(value) === "[object Date]")
}
