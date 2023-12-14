import { StyleInterface } from '../StyleInterface'

export function BibleTextStyle(props: StyleInterface) {
    return (
        <em className={`text-lg text-center px-4 ${props.className}`}>
            {props.content}
        </em>
    )
}
