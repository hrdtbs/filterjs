export const isUndefined = (value: any): value is undefined => {
    return Boolean(value === undefined)
}
