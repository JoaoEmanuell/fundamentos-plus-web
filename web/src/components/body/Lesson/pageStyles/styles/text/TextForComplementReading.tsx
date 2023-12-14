import { getRandomElementKey } from '@/lib/randomElementKey'
import { StyleInterface } from '../StyleInterface'
import { CenterDiv } from '@/components/ui/CenterDiv'

export function TextForComplementReadingStyle(props: StyleInterface) {
    const texts = props.content.split(' | ')
    return (
        <CenterDiv className="text-center">
            <div className="p-4 border-2 border-greenButton">
                <h1 className="font-bold text-lg">
                    TEXTOS PARA LEITURA COMPLEMENTAR:
                </h1>
                {texts.map((text) => {
                    if (texts.indexOf(text) === texts.length - 1) {
                        // Last element
                        return <span key={getRandomElementKey()}>{text}</span>
                    }
                    return (
                        <span key={getRandomElementKey()}>
                            {text} <span className="font-bold"> | </span>
                        </span>
                    )
                })}
            </div>
        </CenterDiv>
    )
}
