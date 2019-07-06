export const isFunction = (value: any, options?: { notArrow: boolean }): value is Function => {
    if (options) {
        return (
            Object.prototype.toString.call(value) === "[object Function]" && (!options.notArrow || "prototype" in value)
        )
    } else {
        return Object.prototype.toString.call(value) === "[object Function]"
    }
}
