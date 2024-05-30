import Markdown from '@/components/react-markdown'
import { StyleInterface } from '../StyleInterface'

export function GreenBackgroundTitleStyle(props: StyleInterface) {
    return (
        <div className="bg-greenButton p-4">
            <h1
                className={`text-2xl font-bold text-center text-white ${props.className}`}
            >
                <Markdown>{props.content}</Markdown>
            </h1>
        </div>
    )
}
