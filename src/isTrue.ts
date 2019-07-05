export const isTrue = (value: any): value is true => {
    return Boolean(value === true)
}
