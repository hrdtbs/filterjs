export const isSet = <T>(value: any): value is Set<T> => {
    return Boolean(Object.prototype.toString.call(value) === "[object Set]")
}
