import { StyleInterface } from './StyleInterface'

export function BibleTextStyle(props: StyleInterface) {
    return (
        <p className={`text-lg text-center px-4 ${props.className}`}>
            {props.content}
        </p>
    )
}
