export const isElement = (value: any): value is Element => {
    return !!value && value.nodeType === 1
}
