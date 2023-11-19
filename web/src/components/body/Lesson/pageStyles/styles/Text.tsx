import { StyleInterface } from './StyleInterface'

export function TextStyle(props: StyleInterface) {
    return <p className={`text-center ${props.className}`}>{props.content}</p>
}
