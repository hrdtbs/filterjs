export const isBoolean = (value: any): value is boolean => {
    return Boolean(typeof value === "boolean")
}
