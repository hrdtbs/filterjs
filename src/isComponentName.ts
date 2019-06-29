import { ReactElement } from "react"
export const isComponentName = <T>(componentName: string) => (child: ReactElement): child is ReactElement<T> => {
    return Boolean(typeof child.type === "function" && child.type.name === componentName)
}
