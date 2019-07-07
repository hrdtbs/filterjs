export const isGeneratorFunction = (value: any): value is GeneratorFunction => {
    return Boolean(Object.prototype.toString.call(value) === "[object GeneratorFunction]")
}
