export const isNumber = (value: any): value is number => {
    return Boolean(typeof value === "number" && isFinite(value))
}
