import { ReactElement, ReactNode } from "react";
export declare const isReactElement: (child: ReactNode) => child is ReactElement<any, string | ((props: any) => ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)> | null) | (new (props: any) => import("react").Component<any, any, any>)>;
