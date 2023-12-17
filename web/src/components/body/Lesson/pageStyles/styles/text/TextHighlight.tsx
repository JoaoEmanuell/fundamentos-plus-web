import { getRandomElementKey } from '@/lib/randomElementKey'
import { StyleInterface } from '../StyleInterface'

import Markdown from 'react-markdown'

export function TextHighlight(props: StyleInterface) {
    const content = props.content.split(' | ')
    const highlightExpression = content[0]
    const color = content[1]
    const text = content[2]
    const texts = text.split(highlightExpression) // get the text split
    return (
        <div>
            <p>
                {texts.map((text, index) => {
                    if (index === texts.length - 1) {
                        // last element
                        return <span key={getRandomElementKey()}>{text}</span>
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
                                    className="mx-1"
                                >
                                    {
                                        <Markdown
                                            components={{
                                                p: 'span',
                                            }}
                                        >
                                            {highlightExpression}
                                        </Markdown>
                                    }
                                </span>
                            </>
                        )
                    }
                })}
            </p>
        </div>
    )
}
