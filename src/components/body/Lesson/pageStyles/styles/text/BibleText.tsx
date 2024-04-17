import { StyleInterface } from '../StyleInterface'
import { TextBoldStyle } from './TextBold'

import Markdown from 'react-markdown'

export function BibleTextStyle(props: StyleInterface) {
    /* bible text | reference */
    if (props.content.includes(' | ')) {
        const propsSplit = props.content.split(' | ')
        const bibleText = propsSplit[0]
        const reference = propsSplit[1]
        return (
            <em className={`text-lg text-center px-4 ${props.className}`}>
                <Markdown>{bibleText}</Markdown>
                <span style={{ fontStyle: 'normal' }}>
                    <TextBoldStyle content={reference} className="mt-4" />
                </span>
            </em>
        )
    } else {
        return (
            <em className={`text-lg text-center px-4 ${props.className}`}>
                <Markdown>{props.content}</Markdown>
            </em>
        )
    }
}
