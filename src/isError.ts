export const isError = (value: any): value is Error => {
    return Boolean(Object.prototype.toString.call(value) === "[object Error]")
}
