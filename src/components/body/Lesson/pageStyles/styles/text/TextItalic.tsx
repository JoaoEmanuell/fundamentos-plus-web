import { StyleInterface } from '../StyleInterface'

import Markdown from '@/components/react-markdown'

export function TextItalicStyle(props: StyleInterface) {
    return (
        <em className={`text-center ${props.className}`}>
            <Markdown>{props.content}</Markdown>
        </em>
    )
}
