import { StyleInterface } from '../StyleInterface'

import Markdown from '@/components/react-markdown'

export function FrameWithTitleAndBorder(props: StyleInterface) {
    /* 
    BorderColor | title | title color | text

    #55730e | **Title** | #55730e | Text
    */
    const contentSplit = props.content.split(' | ')
    const borderColor = contentSplit['0']
    const title = contentSplit['1']
    const titleColor = contentSplit['2']
    const text = contentSplit['3']
    return (
        <div
            style={{
                border: 2,
                borderStyle: 'solid',
                borderColor: borderColor,
            }}
            className="p-4"
        >
            <h2
                className="text-xl mb-2"
                style={{
                    color: titleColor,
                }}
            >
                <Markdown>{title}</Markdown>
            </h2>
            <p>
                <Markdown>{text}</Markdown>
            </p>
        </div>
    )
}
