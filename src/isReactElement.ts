import { ReactElement, ReactNode } from "react"
export const isReactElement = (child: ReactNode): child is ReactElement => {
    return Boolean(child && typeof child === "object" && "type" in child && typeof child.type === "function")
}
