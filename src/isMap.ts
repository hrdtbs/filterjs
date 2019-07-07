export const isMap = <K, V>(value: any): value is Map<K, V> => {
    return Boolean(Object.prototype.toString.call(value) === "[object Map]")
}
