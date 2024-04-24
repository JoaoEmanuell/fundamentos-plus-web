import { CSSProperties, PropsWithChildren } from 'react'

interface CenterDivInterface {
    className?: string
    style?: CSSProperties | undefined
}

export function CenterDiv(props: PropsWithChildren<CenterDivInterface>) {
    return (
        <div
            className={`flex justify-center ${props.className}`}
            style={props.style}
        >
            {props.children}
        </div>
    )
}
