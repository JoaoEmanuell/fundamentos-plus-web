import { PropsWithChildren } from 'react'

interface CenterDivInterface {
    className?: string
}

export function CenterDiv(props: PropsWithChildren<CenterDivInterface>) {
    return (
        <div className={`flex justify-center ${props.className}`}>
            {props.children}
        </div>
    )
}
