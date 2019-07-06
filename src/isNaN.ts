export const isNaN = (value: any): value is typeof NaN => {
    return Number.isNaN(value)
}
