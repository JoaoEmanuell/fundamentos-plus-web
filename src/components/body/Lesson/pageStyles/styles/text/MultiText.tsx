import { StyleInterface } from '../StyleInterface'

import Markdown from '@/components/react-markdown'

export function MultiTextStyle(props: StyleInterface) {
    /* 
    Split with |
    lorem | lorem 1 , lorem | lorem 3
    */
    const texts = props.content.split(' | ')
    return (
        <div className="space-y-4">
            {texts.map((text) => {
                return (
                    <p
                        className={`text-justify text-base ${props.className}`}
                        key={text}
                    >
                        <Markdown>{text}</Markdown>
                    </p>
                )
            })}
        </div>
    )
}
