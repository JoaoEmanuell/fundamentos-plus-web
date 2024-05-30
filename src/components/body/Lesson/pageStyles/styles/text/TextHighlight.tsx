import { getRandomElementKey } from '@/lib/randomElementKey'
import { StyleInterface } from '../StyleInterface'

import Markdown from '@/components/react-markdown'

export function TextHighlight(props: StyleInterface) {
    /* 
    expression to highlight | color to expression | text
    */
    const content = props.content.split(' | ')
    const highlightExpression = content[0]
    const color = content[1]
    const text = content[2]
    const texts = text.split(highlightExpression) // get the text split
    return (
        <div>
            <p className="break-words">
                {texts.map((text, index) => {
                    if (index === texts.length - 1) {
                        // last element
                        return (
                            <span
                                key={getRandomElementKey()}
                                className="break-words"
                            >
                                {text}
                            </span>
                        )
                    } else {
                        return (
                            <>
                                {
                                    <Markdown
                                        components={{
                                            p: 'span',
                                        }}
                                    >
                                        {text}
                                    </Markdown>
                                }
                                <span
                                    style={{
                                        color: color,
                                    }}
                                    className="break-words"
                                >
                                    {' '}
                                    {
                                        <Markdown
                                            components={{
                                                p: 'span',
                                            }}
                                        >
                                            {`${highlightExpression}`}
                                        </Markdown>
                                    }{' '}
                                </span>
                            </>
                        )
                    }
                })}
            </p>
        </div>
    )
}
