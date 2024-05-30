import { StyleInterface } from '../StyleInterface'

import Markdown from '@/components/react-markdown'

export function TextStyle(props: StyleInterface) {
    return (
        <p className={`text-justify text-base ${props.className}`}>
            <Markdown>{props.content}</Markdown>
        </p>
    )
}
