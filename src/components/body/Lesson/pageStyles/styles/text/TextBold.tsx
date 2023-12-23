import { StyleInterface } from '../StyleInterface'

import Markdown from 'react-markdown'

export function TextBoldStyle(props: StyleInterface) {
    return (
        <p className={`text-center font-bold ${props.className}`}>
            <Markdown>{props.content}</Markdown>
        </p>
    )
}
