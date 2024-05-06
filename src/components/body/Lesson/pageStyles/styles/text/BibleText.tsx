import { StyleInterface } from '../StyleInterface'
import { TextBoldStyle } from './TextBold'
import { GreenSeparatorStyle } from '../green/GreenSeparator'

import Markdown from 'react-markdown'

export function BibleTextStyle(props: StyleInterface) {
    /* bible text | reference */
    if (props.content.includes(' | ')) {
        const propsSplit = props.content.split(' | ')
        const bibleText = propsSplit[0]
        const reference = propsSplit[1]
        return (
            <div>
                <div className="flex justify-center">
                    <GreenSeparatorStyle content="" />
                </div>
                <em className={`text-lg text-center px-4 ${props.className}`}>
                    <Markdown>{bibleText}</Markdown>
                    <span style={{ fontStyle: 'normal' }}>
                        <TextBoldStyle content={reference} className="mt-4" />
                    </span>
                </em>
            </div>
        )
    } else {
        return (
            <div>
                <div className="flex justify-center">
                    <GreenSeparatorStyle content="" />
                </div>
                <em className={`text-lg text-center px-4 ${props.className}`}>
                    <Markdown>{props.content}</Markdown>
                </em>
            </div>
        )
    }
}
