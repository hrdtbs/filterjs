export const isDocument = (value: any): value is Document => {
    return !!value && value.nodeType === 9
}
