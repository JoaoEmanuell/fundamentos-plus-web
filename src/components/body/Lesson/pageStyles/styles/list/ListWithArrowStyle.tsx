import { StyleInterface } from '../StyleInterface'
import { getRandomElementKey } from '@/lib/randomElementKey'

import { MoveUp, MoveRight, MoveDown, MoveLeft } from 'lucide-react'

import Markdown from 'react-markdown'

export function ListWithArrowStyle(props: StyleInterface) {
    /* 
    Structure:

    "arrowDirection | color | text | text | text..."
    Example:
    left | #55730e | lorem2 | ml-ore | lorem...
    */

    type directions = 'up' | 'right' | 'down' | 'left'

    const elements = props.content.split(' | ')
    const arrowDirection: directions = elements[0] as directions
    const color = elements[1]
    const texts = elements.slice(2, elements.length)

    const arrows = {
        up: <MoveUp color={color} className="inline" />,
        right: <MoveRight color={color} className="inline" />,
        down: <MoveDown color={color} className="inline" />,
        left: <MoveLeft color={color} className="inline" />,
    }

    const arrow = arrows[arrowDirection]

    return (
        <div>
            {texts.map((element) => {
                return (
                    <div key={getRandomElementKey()}>
                        <p>
                            {arrow}{' '}
                            <Markdown
                                components={{
                                    p: 'span',
                                }}
                            >
                                {element}
                            </Markdown>
                        </p>
                    </div>
                )
            })}
        </div>
    )
}
