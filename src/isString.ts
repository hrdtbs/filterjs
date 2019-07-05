export const isString = (value: any): value is string => {
    return Boolean(typeof value === "string")
}
