import { StyleInterface } from '../StyleInterface'
import Markdown from '@/components/react-markdown'

export function GreenSubTitleStyle(props: StyleInterface) {
    return (
        <h1
            className={`text-lg font-bold text-greenButton text-center ${props.className}`}
        >
            <Markdown>{props.content}</Markdown>
        </h1>
    )
}
