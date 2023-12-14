import { StyleInterface } from '../StyleInterface'

export function TextItalicStyle(props: StyleInterface) {
    return <em className={`text-center ${props.className}`}>{props.content}</em>
}
