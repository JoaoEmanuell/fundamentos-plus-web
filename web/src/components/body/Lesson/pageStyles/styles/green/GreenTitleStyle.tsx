import { StyleInterface } from '../StyleInterface'

import Markdown from 'react-markdown'

export function GreenTitleStyle(props: StyleInterface) {
    return (
        <h1
            className={`text-2xl font-bold text-greenButton text-center ${props.className}`}
        >
            <Markdown>{props.content}</Markdown>
        </h1>
    )
}
