import { StyleInterface } from '../StyleInterface'

import Markdown from 'react-markdown'

export function TextGreenStyle(props: StyleInterface) {
    return (
        <p
            className={`text-center text-base text-greenText font-semibold ${props.className}`}
        >
            <Markdown>{props.content}</Markdown>
        </p>
    )
}
