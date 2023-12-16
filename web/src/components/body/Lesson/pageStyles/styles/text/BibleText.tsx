import { StyleInterface } from '../StyleInterface'

import Markdown from 'react-markdown'

export function BibleTextStyle(props: StyleInterface) {
    return (
        <em className={`text-lg text-center px-4 ${props.className}`}>
            <Markdown>{props.content}</Markdown>
        </em>
    )
}
