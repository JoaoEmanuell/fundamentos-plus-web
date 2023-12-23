import { StyleInterface } from '../StyleInterface'
import Markdown from 'react-markdown'

export function TextImportantNote(props: StyleInterface) {
    return (
        <div className="p-4 border-2 border-greenButton">
            <h2 className="text-lg text-greenButton font-bold mb-4">
                Observação importante:
            </h2>
            <Markdown>{props.content}</Markdown>
        </div>
    )
}
