import { StyleInterface } from '../StyleInterface'
import { CenterDiv } from '@/components/ui/CenterDiv'
import Markdown from 'react-markdown'

export function TextForComplementReadingStyle(props: StyleInterface) {
    const text = props.content.replaceAll(' | ', ' **|** ')
    return (
        <CenterDiv className="text-center">
            <div className="p-4 border-2 border-greenButton">
                <h1 className="font-bold text-lg">
                    TEXTOS PARA LEITURA COMPLEMENTAR:
                </h1>
                <Markdown>{text}</Markdown>
            </div>
        </CenterDiv>
    )
}
