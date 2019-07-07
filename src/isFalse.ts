export const isFalse = (value: any): value is false => {
    return Boolean(value === false)
}
