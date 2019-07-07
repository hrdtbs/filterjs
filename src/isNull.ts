export const isNull = (value: any): value is null => {
    return Boolean(value === null)
}
