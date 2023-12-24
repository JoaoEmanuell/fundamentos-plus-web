import { getRandomElementKey } from '@/lib/randomElementKey'
import { StyleInterface } from '../StyleInterface'
import { Check } from 'lucide-react'

import Markdown from 'react-markdown'

export function CheckListStyle(props: StyleInterface) {
    /*
    Separate lines with |
    line0 | line1 | line2
     */
    const texts = props.content.split(' | ')
    return (
        <div>
            {texts.map((text) => {
                return (
                    <p key={getRandomElementKey()}>
                        <Check color="#55730e" className="inline mr-2" />
                        <Markdown
                            components={{
                                p: 'span',
                            }}
                        >
                            {text}
                        </Markdown>
                    </p>
                )
            })}
        </div>
    )
}
