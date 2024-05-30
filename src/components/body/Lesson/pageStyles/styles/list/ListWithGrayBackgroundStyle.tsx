import { StyleInterface } from '../StyleInterface'
import { getRandomElementKey } from '@/lib/randomElementKey'

import Markdown from '@/components/react-markdown'

export function ListWithGrayBackgroundStyle(props: StyleInterface) {
    /* 
    Structure:

    "text | text | text..."
    Example:
    lorem | lorem2, ml-ore | lorem3
    */
    const elements = props.content.split(' | ')
    return (
        <div>
            {elements.map((element) => {
                return (
                    <div
                        key={getRandomElementKey()}
                        className="mb-2 bg-gray-400 text-center p-4 text-black text-base"
                    >
                        <p>
                            <Markdown>{element}</Markdown>
                        </p>
                    </div>
                )
            })}
        </div>
    )
}
